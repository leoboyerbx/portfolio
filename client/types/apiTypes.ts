/* eslint-disable no-use-before-define */

export interface Homepage {
  id: number
  intro: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  projects: HomepageProjects
  openSource: HomepageOpenSource
  contact: HomepageContact
}

export interface HomepageContact {
  id: number
  title: string
  links: Link[]
}

export interface Link {
  id: number
  title: string
  url: string
  newTab: boolean
}

export interface HomepageOpenSource {
  id: number
  title: string
  sideNote: string
  description: string
  projects: OpenSourceProject[]
}

export interface OpenSourceProject {
  id: number
  name: string
  description: string
  url: string
}

export interface HomepageProjects {
  id: number
  title: string
  projects: Project[]
}

export interface File {
  id: number
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: Date
  updatedAt: Date
}

export interface Project {
  id: number
  name: string
  slug: string
  baseline: string
  skillsTitle: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  links: Link[]
  thumbnail: File
  skills: (SkillComponent | DividerComponent)[]
  video: Video
  images: File[]
  localizations: any[]
}

export interface SkillComponent {
  id: number
  __component: 'project.skill'
  name: string
}

export interface DividerComponent {
  id: number
  __component: 'global.divider'
}

export interface Video {
  id: number
  title: string
  embed: string
  description: string
}
