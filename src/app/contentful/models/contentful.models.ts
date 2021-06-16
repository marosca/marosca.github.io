import { Asset } from "contentful"
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import { ProjectType } from "src/app/models/projects.model"

// Those query options that all contentful Assets have by default
export interface BaseQuery {
  order: string
}

// https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/order
export const ORDER_BY_NEWEST_QUERY: BaseQuery = {
  order: '-sys.updatedAt' // newest first
}


// Multi item, by model content_type
export interface EntriesQuery extends BaseQuery {
  content_type: string
  [fields: string]: string
}

// One item, by its entry id
export interface EntryQuery extends BaseQuery {
  entryId: string
}

// Will filter the base contentful info gliberish and give us a typed fields object
export interface SimplifiedEntry<T> {
  id: string
  fields: T
}

export interface ContentfulProjectsLanding {
  fields: {
    name: string
    pdf: Asset
    aboutMe: RichTextDocument
    projects: ContentfulProject[]
    contact: RichTextDocument
  }
}

export interface ContentfulProject {
  fields: {
    type: ProjectType
    typeText: string
    name: string
    url: string
    logo?: Asset
    video?: string
    imageHome: Asset
    imageCover: Asset
    department: string
    client: string
    description: RichTextDocument
    images?: Asset[]
  }
}
