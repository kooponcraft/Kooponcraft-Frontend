import CreateNew from "@/components/dashboard/create-new";
import Error from "@/components/error";
import React from "react";

export async function generateMetadata({ params }: any) {
	const { slug } = await params

	if(slug.toLowerCase() !== "items" && slug.toLowerCase() !== "collection"){
		return {
			title: `404 - Kooponcraft`,
		}
	}

	return {
		title: `Create New | ${slug} - Kooponcraft`,
	}
  }

const index = async ({ params }: any) => {
	const { slug } = await params

	if(slug.toLowerCase() !== "items" && slug.toLowerCase() !== "collection"){
		return <Error />
	}
	return (
		<>
			<CreateNew />
		</>
	);
};

export default index;
