import { defineField, defineType } from "sanity"

export default defineType({
  name: "header",
  title: "Section Header",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Section title",
        description: "Section title",
        type: "string",
    }),
    defineField({
        name: "siteTitle",
        title: "Site Title",
        description: "Site name",
        type: "string",
    }),
    defineField({
        name: "headerLogo",
        title: "Header Logo",
        description: "Site Logo",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
    defineField({
        name: "navbar",
        title: "Navbar Items",
        description: "Site navigation menu",
        type: "array",
        of: [{ type: "reference", to: { type: "navbarItem" } }],
    } ),
    defineField({
        name: "mobileMenuIcon",
        title: "Mobile Menu Icon Open",
        description: "Mobile Menu Icon Open",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
  ],
});