import { client } from "@/sanity/lib/client";
import { Price } from "@/sanity/interface";

export default async function getPrices(){
const query =`
*[_type == "price"] {
...
}
`;
 try {
    const prices: Price[] = await client.fetch(query)
    return prices 
    } catch (error: any) {
    throw new Error(error?.message || "Error get Prices");
    }
}