export enum ProjectType {
  FRONTEND = 'front-end',
  MOTION = 'motion',
  BOTH = 'ambos'
}

export interface Project {
  type: ProjectType
  typeText: string,
  name: string,
  logo: string | null,
  video: string | null,
  imageHome: string,
  imageCover?: string | null,
  text: {
    department: string,
    client: string,
    description: string,
  },
  images: string[],
  url: string,
}

export interface ProjectsLanding {
  name: string
  aboutMe: string
  projects: Project[]
  contact: string
}