
import { defineField, defineType } from "sanity"

export default defineType({
  name: "footer",
  title: "Section Footer",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
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
        name: "footerLogo",
        title: "Footer Logo",
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
        name: "socials",
        title: "Social Links",
        description: "Social Links",
        type: "array",
        of: [{ type: "reference", to: { type: "social" } }],
      }),
    defineField({
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    } ),

    defineField({
      name: "copyright",
      title: "Copyright",
      type: "string",
    }),
    defineField ({
      name: "footerBtnUp",
      title: "FooterBtnUp",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});