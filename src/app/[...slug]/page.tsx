import Error from "@/components/error";
import ItemDetails from "@/components/item-details";
import { getItemDetails } from "@/lib/getItemDetails";
import { toProperCase } from "@/lib/toProperCase";

function isItemDetailsPath(slug: string[]) {
    return slug[0].toLowerCase() === 'item' || slug[0].toLowerCase() === 'coupon';
}

export async function generateMetadata({ params }: any) {
    const { slug } = await params

    if (isItemDetailsPath(slug) && slug.length === 3) {
        const type = slug[0]
        const collectionId = slug[1]
        const tokenId = slug[2]

        const data = await getItemDetails(type, collectionId, tokenId)

        if(data?.success === false){
            return {
                title: `404 - Kooponcraft`,
              }
        }

        return {
            title: `${data.token?.tokenName} | ${toProperCase(type)} - Kooponcraft`,
        };
    }

    return {
      title: `404 - Kooponcraft`,
    }
}

export default async function DynamicPage({ params }: any ) {
    const { slug } = await params

    if (isItemDetailsPath(slug) && slug.length === 3) {
        const type = slug[0]
        const collectionId = slug[1]
        const tokenId = slug[2]

        const data = await getItemDetails(type, collectionId, tokenId)

        if(data?.success === false){
            return <Error />
        }
        return <ItemDetails title={toProperCase(type)} subtitle={data.token?.tokenName}/>;
    }

    return <Error />;
}