import { client } from '@/sanity/lib/client'
import { HeaderInterface, HeroInterface, AboutInterface } from '@/sanity/interface'

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
    throw new Error(error?.message || 'Error get header data')
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
    throw new Error(error?.message || 'Error get header data')
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
    throw new Error(error?.message || 'Error get header data')
  }
}
