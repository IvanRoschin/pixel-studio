import { client } from '@/sanity/lib/client'
import { Project } from '@/sanity/interface'

export default async function getProjects() {
  const query = `
*[_type == "project"] {
...,
}
`

  try {
    const projects: Project[] = await client.fetch(query)
    return projects
  } catch (error: any) {
    throw new Error(error?.message || 'Error get Projects')
  }
}
