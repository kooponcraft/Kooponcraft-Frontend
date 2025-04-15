import ItemDetails from "@/components/item-details";
import React from "react";

// export const metadata = {
// 	title: "Item Details - Kooponcraft",
// };

export async function generateMetadata({ params }: any) {
  const { collectionId, tokenId } = await params
  return {
	// title: `${username} | Store - Kooponcraft`,
  }
}

const index = () => {
	return (
		<>
			<ItemDetails />
		</>
	);
};

export default index;
