import { client } from '@/sanity/lib/client'
import { HeroInterface } from '@/sanity/interface'

export default async function getHero() {
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
