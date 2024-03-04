import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "string",
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
  ],
});
