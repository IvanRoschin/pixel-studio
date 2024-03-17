import { defineField, defineType } from "sanity"

export default defineType({
  name: "serviceItem",
  title: "Service Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of Service Item",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      description: "Text of Service Item",
      type: "string",
    }),
  ],
});
