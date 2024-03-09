import { client } from '@/sanity/lib/client'
import { Stack } from '@/sanity/interface'

export default async function getStacks() {
  const query = `
*[_type == "stack"] {
    ...
}
`
  try {
    const stacks: Stack[] = await client.fetch(query)
    return stacks
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Stacks')
  }
}
