import { defineField, defineType } from "sanity"

export default defineType( {
  name: "prices",
  title: "Section Prices",
  type: "document",
  fields: [
    defineField( {
      name: "title",
      title: "Title",
      description: "Section title",
      type: "string",
    } ),
  {
      name: "price",
      title: "Case prices",
      type: "array",
      of: [{ type: "reference", to: { type: "price" } }],
    },
  ],
} );