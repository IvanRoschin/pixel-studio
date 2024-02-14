import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "TeamMember",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
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
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "stack" } }],
    },
    {
      name: "joinedTeam",
      title: "JoinedTeam",
      type: "date",
    },
    {
      name: "isCurrentWorkingHere",
      title: "IsCurrentWorkingHere",
      type: "boolean",
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
