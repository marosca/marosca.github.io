import { Injectable } from '@angular/core';
import { ContentfulClientApi, createClient, Entry, EntryCollection } from 'contentful';
import { from, Observable, of } from 'rxjs';
import { Project } from 'src/app/models/proyectos.data';
import { ContentfulProject, ContentfulProjectsLanding, EntriesQuery, EntryQuery, ORDER_BY_NEWEST_QUERY } from '../models/contentful.models';
import {
  catchError,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  timeout
} from 'rxjs/operators'
import { normalizeProjectFromContentful, normalizeProjectsLanding } from '../helpers/contentful.helpers';
import { ProjectsLanding } from 'src/app/models/projects.model';


const SPACE_ID = 'ujjv6x66ivgi'
const ACCESS_TOKEN = 'CFPAT-aVy-IPJkQZUMAD1BXMvHVhXXYikphMXd4osqxNQ9RU4'
const CDN_CONTENTFUL = 'cdn.contentful.com'

const CONTENT_ACCESS_TOKEN = 'yTkgvAY_Jx4BnEgo9la217_87x7_pSMhCc4ctm8WVw0'
const CONTENT_PREVIEW_ACCESS_TOKEN = 'DV8IyLpl4o7gU3HLB6YfGzjX8IiYBO-wWCWvOqcEVxo'

const PROJECT_MODULE_ID = '3QoZhU7zRY6q5vO4NsUBfp'
@Injectable({
  providedIn: 'root'
})
export class ContenfulService {
  client: ContentfulClientApi
  projectsLandingCache!: ProjectsLanding

  constructor() { 
    this.client = createClient({
      space: SPACE_ID,
      accessToken: CONTENT_ACCESS_TOKEN,
      host: CDN_CONTENTFUL
    })
  }

  async getPageData() {    
    if (this.projectsLandingCache) return this.projectsLandingCache

    const query: EntryQuery = {
      entryId: PROJECT_MODULE_ID,
      ...ORDER_BY_NEWEST_QUERY
    }
    let entry = await this.client.getEntry(query.entryId) as ContentfulProjectsLanding
    this.projectsLandingCache = normalizeProjectsLanding(entry)


    return this.projectsLandingCache
  }


  async getProjectDetail(url:string): Promise<Project | undefined> {
    let project: Project | undefined
    if (this.projectsLandingCache) {
      project = this.projectsLandingCache.projects.find(p => p.url === url)
    }

    if (project) {
      return project 
    } else {
      const query: EntriesQuery = {
        content_type: 'project',
        'fields.url': url,
        limit: '1', // take the newest
        ...ORDER_BY_NEWEST_QUERY
      }
      const entry = await this.client.getEntries(query)
      return entry.items.length ? normalizeProjectFromContentful(entry.items[0] as ContentfulProject) : undefined
    }
  }

}
