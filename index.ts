export enum TextDirection {
  'ltr',
  'rtl',
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

export class PublicationManifest {
  type?: string[]
  profile: string
  conformsTo?: string[]
  id?: string
  abridged?: boolean
  accessMode?: string[]
  accessModeSufficient?: string[]
  accessibilityFeature?: string[]
  accessibilityHazard?: string[]
  accessibilitySummary?: LocalizableString[]
  artist?: Entity[]
  author?: Entity[]
  colorist?: Entity[]
  contributor?: Entity[]
  creator?: Entity[]
  editor?: Entity[]
  illustrator?: Entity[]
  inker?: Entity[]
  letterer?: Entity[]
  penciler?: Entity[]
  publisher?: Entity[]
  readBy?: Entity[]
  translator?: Entity[]
  url?: string[]
  duration?: string[]
  inLanguage?: string[]
  dateModified?: string
  datePublished?: string
  readingProgression?: TextDirection
  name: LocalizableString[]
  readingOrder: LinkedResource[]
  resources?: LinkedResource[]
  links?: LinkedResource[]
  uniqueResources?: string

  constructor(
    profile: string,
    name: LocalizableString[],
    readingOrder: LinkedResource[]
  ) {
    this.profile = profile
    this.name = name
    this.readingOrder = readingOrder
    this.type = []
    this.type.push('CreativeWork')
    this.readingProgression = TextDirection.ltr
  }
}
