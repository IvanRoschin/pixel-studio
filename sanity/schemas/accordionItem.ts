import { defineType } from "sanity";

export default defineType({
  name: "accordionItem",
  title: "Accordion Item",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of Accordion Item",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      description: "Text of Accordion Item",
      type: "string",
    },
  ],
});
