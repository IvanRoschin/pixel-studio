import { type SchemaTypeDefinition } from "sanity";


import { accordionItem, navbarItem, pageInfo, price, project, social, stack, teamMember, technologies } from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, project, social, stack, teamMember, technologies, price, navbarItem, accordionItem],
};
