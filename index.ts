/**
 * Wysebee PublicationManifest is based on pub manifest
 * https://www.w3.org/TR/pub-manifest/#webidl-wpm
 * along with some customization for convenience purpose
 */

export enum TextDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}

export type LocalizableString = {
  value: string
  language?: string
  direction?: TextDirection
}

export type LinkedResource = {
  url: string
  encodingFormat?: string
  name?: LocalizableString[]
  description?: LocalizableString[]
  rel?: string[]
  integrity?: string
  duration?: string
  alternate?: LinkedResource[]
}

export type Entity = {
  type?: string[]
  name: LocalizableString[]
  id?: string
  url?: string
  identifier?: string[]
}

export type PublicationManifest = {
  profile: string // required
  id: string // required by Wysebee
  name: string // required
  readingOrder: string[] // required

  type?: string[]
  conformsTo?: string[]
  abridged?: boolean
  accessMode?: string[]
  accessModeSufficient?: string[]
  accessibilityFeature?: string[]
  accessibilityHazard?: string[]
  accessibilitySummary?: LocalizableString[] | string
  artist?: Entity[] | string
  author?: Entity[] | string
  colorist?: Entity[] | string
  contributor?: Entity[] | string
  creator?: Entity[] | string
  editor?: Entity[] | string
  illustrator?: Entity[] | string
  inker?: Entity[] | string
  letterer?: Entity[]
  penciler?: Entity[]
  publisher?: Entity[] | string
  readBy?: Entity[]
  translator?: Entity[]
  url?: string[]
  duration?: string[]
  inLanguage?: string[]
  dateModified?: string
  datePublished?: string
  readingProgression?: TextDirection
  resources?: LinkedResource[]
  links?: LinkedResource[]
  uniqueResources?: string
  coverImage?: string // extra, easier to use than go through resources each time
  toc?: string // extra, easier to use than go through resources each time
  description?: string // extra
}
