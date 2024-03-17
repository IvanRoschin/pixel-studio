import {
  AboutInterface,
  CasesInterface,
  ContactInterface,
  FooterInterface,
  HeaderInterface,
  HeroInterface,
  PricesInterface,
  ServiсesInterface,
  TeamInterface,
  TechnologiesInterface,
} from '@/sanity/interface'
import { client } from '@/sanity/lib/client'

export async function getHeader() {
  const query = `
  *[_type == "header"][0] {
    ...,
  
    navbar[]->
  }
`
  try {
    const header: HeaderInterface = await client.fetch(query)
    return header
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Header data')
  }
}
export async function getHero() {
  const query = `
  *[_type == "hero"][0] {
    ...,
  }
`
  try {
    const hero: HeroInterface = await client.fetch(query)
    return hero
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Hero data')
  }
}

export async function getAbout(): Promise<AboutInterface> {
  const query = `
  *[_type == "about"][0] {
    ...,

    advantages[]->,
  }
`
  try {
    const about: AboutInterface = await client.fetch(query)
    return about
  } catch (error: any) {
    throw new Error(error?.message || 'Error get About data')
  }
}

export async function getTeam(): Promise<TeamInterface> {
  const query = `
  *[_type == "team"][0] {
    ...,

    teamMembers[]->,
  }
`
  try {
    const team: TeamInterface = await client.fetch(query)
    return team
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Team data')
  }
}

export async function getServices(): Promise<ServiсesInterface> {
  const query = `
  *[_type == "services"][0] {
   ...,
  
    services[]->,
  }
`
  try {
    const services: ServiсesInterface = await client.fetch(query)
    return services
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Services data')
  }
}

export async function getTechnologies(): Promise<TechnologiesInterface> {
  const query = `
  *[_type == "technologies"][0] {
    ...,
  
    technology[]->,
  }
`
  try {
    const technologies: TechnologiesInterface = await client.fetch(query)
    return technologies
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Technologies data')
  }
}

export async function getCases(): Promise<CasesInterface> {
  const query = `
  *[_type == "cases"][0] {
    ...,
  
    projects[]->,
  }
`
  try {
    const cases: CasesInterface = await client.fetch(query)
    return cases
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Cases data')
  }
}

export async function getPrices(): Promise<PricesInterface> {
  const query = `
  *[_type == "prices"][0] {
    ...,
  
    price[]->,
  }
`
  try {
    const prices: PricesInterface = await client.fetch(query)
    return prices
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Prices data')
  }
}

export async function getContact(): Promise<ContactInterface> {
  const query = `
  *[_type == "contact"][0] {
    ...,
  }
`
  try {
    const contact: ContactInterface = await client.fetch(query)
    return contact
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Contact data')
  }
}

export async function getFooter(): Promise<FooterInterface> {
  const query = `
  *[_type == "footer"][0] {
    ...,
    
    navbar[]->,
    
    socials[]->,
  }
`
  try {
    const footer: FooterInterface = await client.fetch(query)
    return footer
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Footer data')
  }
}
