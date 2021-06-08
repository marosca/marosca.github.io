import { Injectable } from '@angular/core';
import { ContentfulClientApi, createClient, Entry } from 'contentful';

const SPACE_ID = 'ujjv6x66ivgi'
const ACCESS_TOKEN = 'CFPAT-vaJ22jBB712vvD3_l3Ism90V_tYkqBU-HZ-9aDE3VGI'
const CDN_CONTENTFUL = 'cdn.contentful.com'

@Injectable({
  providedIn: 'root'
})
export class ContenfulService {
  defaultClient: ContentfulClientApi
  constructor() { 
    this.defaultClient = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
      host: CDN_CONTENTFUL
    })
  }
}
