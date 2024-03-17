import { defineField, defineType } from "sanity"

export default defineType( {
  name: "technologies",
  title: "Section Technologies",
  type: "document",
  fields: [
    defineField( {
      name: "title",
      title: "Title",
      description: "Section title",
      type: "string",
    } ),
    {
      name: "technology",
      title: "Technology",
      type: "array",
      of: [{ type: "reference", to: { type: "technologyItem" } }],
    },
  ],
} );