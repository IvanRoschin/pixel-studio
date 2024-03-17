import { defineField, defineType } from "sanity"

export default defineType( {
  name: "team",
  title: "Section Team",
  type: "document",
  fields: [
    defineField( {
      name: "title",
      title: "Title",
      description: "Section title",
      type: "string",
    } ),
  {
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [{ type: "reference", to: { type: "teamMember" } }],
    },
  ],
} );