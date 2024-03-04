import { defineType } from "sanity";

export default defineType({
  name: "navbarItem",
  title: "NavbarItem",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
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
