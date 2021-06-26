import { Injectable } from '@angular/core';
import { ContentfulClientApi, createClient, Entry, EntryCollection } from 'contentful';
import { from, Observable, of, pipe } from 'rxjs';
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
import { environment } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContenfulService {
  client: ContentfulClientApi
  projectsLandingCache!: ProjectsLanding
  projectsLandingCache2!: Observable<ContentfulProjectsLanding>

  PROJECT_MODULE_ID = '3QoZhU7zRY6q5vO4NsUBfp'

  headers = new HttpHeaders().set(
    'Authorization',
    'Bearer ' + environment.CONTENT_ACCESS_TOKEN
  )
  constructor(private http: HttpClient) { 

    this.client = createClient({
      space: environment.SPACE_ID,
      accessToken: environment.CONTENT_ACCESS_TOKEN,
      host: environment.CDN_CONTENTFUL,
      adapter: this.httpAdapter.bind(this) // overwrite http request by angular httpClient to avoid render SSR until has contentful content
    })
  }

  httpAdapter(config: any) {
    config.adapter = null;
    return this.http
      .request(config.method, `${config.baseURL}/${config.url}`, {
        headers: {
          Accept: config.headers['Accept'],
          Authorization: config.headers['Authorization'],
          'Content-Type': config.headers['Content-Type'],
          'X-Contentful-User-Agent':
            config.headers['X-Contentful-User-Agent'],
        },
        params: config.params,
      })
      .toPromise()
      .then((response: any) => {
        console.log(response);
        return { data: response };
      });
  }

  async getPageData() {    
    if (this.projectsLandingCache) return this.projectsLandingCache

    const query: EntryQuery = {
      entryId: this.PROJECT_MODULE_ID,
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
