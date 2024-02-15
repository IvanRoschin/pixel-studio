import { defineField, defineType } from "sanity";

export default defineType({
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    {
      name: "name",
      title: "title",
      description: "Title of technology",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of technology from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
