import { defineType } from "sanity";

export default defineType({
  name: "advantageItem",
  title: "Advantage Item",
  type: "document",
  fields: [
    {
      name: "figure",
      title: "Figure",
      description: "Advantage Figure",
      type: "string",
    },
    {
        name: "title",
        title: "Title",
        description: "Advantage Title",
        type: "string",
      },
  ],
});
