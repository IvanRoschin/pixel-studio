import { defineField, defineType } from "sanity"

export default defineType( {
  name: "services",
  title: "Section Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Section title",
      type: "string",
    }),
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: { type: "serviceItem" } }],
    },
    defineField({
      name: "openIcon",
      title: "accordion Open Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField(  {
      name: "closeIcon",
      title: "accordion Close Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
} );