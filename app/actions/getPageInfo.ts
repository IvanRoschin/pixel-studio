import { client } from "@/sanity/lib/client";
import { PageInfo } from "@/sanity/interface";

export default async function getPageInfo(){
    const query =`
*[_type == "pageInfo"][0]
`;
  try {
    const pageInfo: PageInfo = await client.fetch(query)
    return pageInfo      
    } catch (error: any) {
    throw new Error(error?.message || "Error get pageInfo");
  }
}
