import { defineField, defineType } from "sanity"

export default defineType({
  name: "technologyItem",
  title: "Technology Item",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "title",
      description: "Title of technology",
      type: "string",
    }),
    defineField({
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of technology from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
