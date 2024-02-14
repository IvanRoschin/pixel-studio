import { client } from "@/sanity/lib/client";
import { Social } from "@/sanity/interface";


export default async function getSocials(){
const query = `
*[_type == "social"] {
    ...
}
`;
try {
 const socials: Social[] = await client.fetch(query)
 return socials 
 } catch (error: any) {
 throw new Error(error?.message || "Error get Socials");
 }
}



