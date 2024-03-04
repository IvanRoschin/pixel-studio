import { defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "navbar",
      title: "Navbar Items",
      type: "array",
      of: [{ type: "reference", to: { type: "navbarItem" } }],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "headerLogo",
      title: "HeaderLogo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
    {
      name: "heroWords",
      title: "HeroWords",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "aboutImage",
      title: "AboutImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "aboutTitle",
      title: "AboutTitle",
      type: "string",
    },
    {
      name: "aboutText",
      title: "AboutText",
      type: "string",
    },
    {
      name: "accordion",
      title: "Accordion Items",
      type: "array",
      of: [{ type: "reference", to: { type: "accordionItem" } }],
    },
    {
      name: "openIcon",
      title: "accordion Open Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
        {
      name: "closeIcon",
      title: "accordion Close Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "contactTitle",
      title: "ContactTitle",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "footerLogo",
      title: "FooterLogo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
        {
      name: "footerBtnUp",
      title: "FooterBtnUp",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "copyright",
      title: "Copyright",
      type: "string",
    },

  ],
});
