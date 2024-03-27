export interface Link {
  title: string
  url: string
  newTab: boolean
}

export interface File {
  width: number
  height: number
  size: number
  name: string
  title: string
  extension: string
  fileId: string
  fileURL: string
  url: string
}

export interface OpenSourceWork {
  name: string
  description: string
  url: string
}
export interface OpenSourceContent {
  title: string
  description: string
  sideNote: string
  works: OpenSourceWork[]
}

export interface StaticData {
  id: string
  intro: string
  projectsTitle: string
  contactLinks: Link[]
  contactTitle: string
  resume: string
}

export interface ProjectSkill {
  name?: string
  divider?: boolean
}
export interface ImageBlockData {
  file: File
  caption: string
  withBorder: boolean
  stretched: boolean
  withBackground: boolean
}

export interface ImageBlock {
  id: string
  type: string
  data: ImageBlockData
}

export interface ProjectImages {
  blocks: ImageBlock[]
}

export interface Project {
  id: string
  sort: number
  date_created: Date
  date_updated: Date
  name: string
  slug: string
  baseline: string
  links: Link[]
  thumbnail: string
  skillsTitle: string
  skills: ProjectSkill[]
  description: string
  videoUrl: string
  videoTitle: string
  videoDescription: string
  images: ProjectImages
}
export type ProjectPushData = Pick<
  Project,
  'id' | 'name' | 'slug' | 'baseline' | 'thumbnail'
>
