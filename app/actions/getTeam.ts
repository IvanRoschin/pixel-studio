import { client } from "@/sanity/lib/client";
import { TeamMember } from "@/sanity/interface";

export default async function getTeam(){
const query =`
*[_type == "teamMember"] {
...,
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
