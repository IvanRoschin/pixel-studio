import { client } from "@/sanity/lib/client";
import { Technology } from "@/sanity/interface";

export default async function getTechnologies(){
const query = `
*[_type == "technology"] {
    ...
}
`;
try {
 const technologies: Technology[] = await client.fetch(query)
 return technologies 
 } catch (error: any) {
 throw new Error(error?.message || "Error get Technologies");
 }
}



