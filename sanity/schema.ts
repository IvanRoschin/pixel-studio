import { type SchemaTypeDefinition } from "sanity";


import { pageInfo, project, social, stack, teamMember, technologies, price } from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, project, social, stack, teamMember, technologies, price],
};
