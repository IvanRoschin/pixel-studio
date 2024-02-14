import { defineField, defineType } from "sanity";

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    {
      name: "name",
      title: "title",
      description: "Title of platform for social media",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],
});
