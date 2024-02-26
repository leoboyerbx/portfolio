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

export interface Link {
  title: string
  url: string
  newTab: boolean
}
export interface StaticData {
  id: string
  intro: string
  contactLinks: Link[]
  contactTitle: string
}
export interface Project {
  id: string
  sort: number | null
  date_created: string
  date_updated: string
  name: string
  slug: string
  baseline?: string
  links: Link[]
  thumbnail: string
}
