import { defineType } from "sanity"

export default defineType({
  name: "navbarItem",
  title: "Navbar Item",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of link for Navbar",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      description: "Navbar link",
      type: "string",
    },
  ],
});
