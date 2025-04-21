import CreateNew from "@/components/dashboard/create-new";
import Error from "@/components/error";
import { getUser } from "@/lib/auth/getUser";
import React from "react";


export async function generateMetadata({ params }: any) {
	const user = await getUser();
	const { slug } = await params

	if (!user?.isAdmin) {
		return {
			title: `404 - Kooponcraft`,
		}
	}

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
	const user = await getUser();
	const { slug } = await params

	if (!user?.isAdmin) {
		return <Error />
	}

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
