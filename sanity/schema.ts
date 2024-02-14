import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schemas/pageInfo";
import project from "./schemas/project";
import social from "./schemas/social";
import stack from "./schemas/stack";
import teamMember from "./schemas/teamMember";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, project, social, stack, teamMember],
};
