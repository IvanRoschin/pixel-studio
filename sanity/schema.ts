import { type SchemaTypeDefinition } from "sanity";


import { header, hero, about, advantageItem, accordionItem, navbarItem, pageInfo, price, project, social, stack, teamMember, technologies } from "./schemas";
import {pageType} from "./schemas/pageBuilder"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, header, hero, about, advantageItem, pageInfo, project, social, stack, teamMember, technologies, price, navbarItem, accordionItem],
};
