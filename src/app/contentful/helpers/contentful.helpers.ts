import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Asset } from 'contentful';
import { Project, ProjectsLanding } from 'src/app/models/projects.model';
import {
  ContentfulProject,
  ContentfulProjectsLanding,
} from '../models/contentful.models';

const hasWebpSupport = canUseWebP();

function canUseWebP() {
  var elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }
  // very old browser like IE 8, canvas not supported
  return false;
}

export function normalizeProjectFromContentful({
  fields,
}: ContentfulProject): Project {
  return {
    type: fields.type,
    typeText: fields.typeText,
    name: fields.name,
    logo: fields.logo ? parseAsset(fields.logo) : '',
    video: fields.video || '',
    imageHome: fields.imageHome ? parseAsset(fields.imageHome) : '',
    imageCover: fields.imageCover ? parseAsset(fields.imageCover) : '',
    text: {
      department: fields.department,
      client: fields.client,
      description: documentToHtmlString(fields.description),
    },
    images: fields.images?.length ? fields.images.map(parseAsset) : [],
    url: fields.url,
  };
}

export function parseAsset(asset: Asset) {
  const sufix = hasWebpSupport ? '?fm=webp' : '';
  return asset ? `${asset.fields.file.url}${sufix}` : '';
}

export function normalizeProjectsLanding({
  fields,
}: ContentfulProjectsLanding): ProjectsLanding {
  return {
    name: fields.name,
    pdf: parseAsset(fields.pdf),
    aboutMe: documentToHtmlString(fields.aboutMe),
    projects: fields.projects.map((entry) =>
      normalizeProjectFromContentful(entry)
    ),
    contact: documentToHtmlString(fields.contact),
  };
}
