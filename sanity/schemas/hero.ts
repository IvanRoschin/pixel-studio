import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        description: "Section title",
        type: "string",
    }),
    defineField({
        name: "typeWords",
        title: "Type Writer Data",
        description: "Site typing words",
        type: "string",
    }),
    defineField({
        name: "subtitle",
        title: "Subtitle",
        description: "Subtitle slogan",
        type: "string",
      }),
  ],
});