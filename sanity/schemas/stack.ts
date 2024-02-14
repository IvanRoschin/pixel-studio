import { defineField, defineType } from "sanity";

export default defineType({
  name: "stack",
  title: "Stack",
  type: "document",
  fields: [
    {
      name: "name",
      title: "title",
      description: "Title of skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of skill from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],
});
