
import { defineField, defineType } from "sanity"

export default defineType({
  name: "contact",
  title: "Section Contact",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        description: "Section title",
        type: "string",
    }),
    defineField({
        name: "mainTitle",
        title: "Main Title",
        description: "Main Title",
        type: "string",
    }),
    defineField({
        name: "subtitle",
        title: "Subtitle",
        description: "Subtitle",
        type: "string",
      }),
  ],
});