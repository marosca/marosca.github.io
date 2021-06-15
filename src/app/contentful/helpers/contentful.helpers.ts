
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Asset } from "contentful";
import { Project, ProjectsLanding } from "src/app/models/projects.model";
import { ContentfulProject, ContentfulProjectsLanding } from "../models/contentful.models";

export function normalizeProjectFromContentful({ fields }: ContentfulProject): Project {
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
  }
}

export function parseAsset(asset: Asset) {
  return asset ? asset.fields.file.url : ''
}


export function normalizeProjectsLanding(
  { fields }: ContentfulProjectsLanding
): ProjectsLanding {

  return {
    name: fields.name,
    aboutMe: documentToHtmlString(fields.aboutMe),
    projects: fields.projects.map(entry => normalizeProjectFromContentful(entry)),
    contact: documentToHtmlString(fields.contact),
  }
}