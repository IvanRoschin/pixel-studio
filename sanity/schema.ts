import { type SchemaTypeDefinition } from "sanity"

import { advantageItem, navbarItem, price, project, sectionAbout, sectionCases, sectionContact, sectionFooter, sectionHeader, sectionHero, sectionPrices, sectionServices, sectionTeam, sectionTechnologies, serviceItem, social, stack, teamMember, technology } from "./schemas"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    sectionHeader,
    sectionHero,
    sectionAbout,
    sectionServices,
    sectionTeam,
    sectionTechnologies,
    sectionCases,
    sectionPrices,
    sectionContact,
    sectionFooter,
    advantageItem,
    navbarItem,
    price,
    project,
    serviceItem,
    social,
    stack,
    teamMember,
    technology,
  ],
};
