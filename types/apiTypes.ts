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

export interface ContactLink {
  title: string
  url: string
  newTab: boolean
}
export interface StaticData {
  id: string
  intro: string
  contactLinks: ContactLink[]
  contactTitle: string
}
