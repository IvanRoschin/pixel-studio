import { defineField, defineType } from "sanity"

export default defineType( {
  name: "cases",
  title: "Section Cases",
  type: "document",
  fields: [
    defineField( {
      name: "title",
      title: "Title",
      description: "Section title",
      type: "string",
    } ),
  {
      name: "projects",
      title: "Case Studies",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
    },
  ],
} );