import CollectionDetails from "@/components/collection";
import { getCollectionDetails } from "@/lib/getCollectionDetails";
import { redirect } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }: any) {
	const { collectionId } = await params
    const collection = await getCollectionDetails(collectionId)

	return {
		title: `${collection?.name} | Collection - Kooponcraft`,
	}
  }

const index = async ({ params }: any) => {
	const { collectionId } = await params
    const collection = await getCollectionDetails(collectionId)

	if(collection?.success === false){
		redirect("/my-collections")
	}
	return (
		<>
			<CollectionDetails />
		</>
	);
};

export default index;
