import { client } from '@/sanity/lib/client'
import { HeaderInterface } from '@/sanity/interface'

export default async function getHeader() {
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
