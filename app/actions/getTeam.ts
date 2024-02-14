import { client } from "@/sanity/lib/client";
import { TeamMember } from "../../typings";

export default async function getTeam(){
const query =`
*[_type == "teamMember"] {
...,
technologies[]->,
socials[]->
}
`;
    try {
    const team: TeamMember[] = await client.fetch(query)
    return team 
    } catch (error: any) {
    throw new Error(error?.message || "Error get Team");
    }
}