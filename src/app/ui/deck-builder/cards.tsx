import Image from 'next/image';
import { lusitana } from "../fonts";
import { fetchCardByName } from "@/app/lib/data";

export default async function CardWrapper(){
    const {
        name,

    } = await fetchCardByName

    return (
        <>
        <Card id="{id}" image_uris="{image_uris}"></Card>
        </>
    )
}

export function Card({
    id,
    image_uris,
}:{
    id: string;
    image_uris: string;
}){

    return (
        <div className="rounded-xl shadow-sm">
            <div className="flex">
                <Image 
                    src="{image_uris}"
                    width = { 760 }
                    height = { 10000 }
                    className="block"
                    alt = "Card"
                />
            </div>

        </div>
    )
}