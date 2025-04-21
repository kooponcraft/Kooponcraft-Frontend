import React from "react";
import MyCollection from "@/components/dashboard/my-collection";
import { getUser } from "@/lib/auth/getUser";
import Error from "@/components/error";

export async function generateMetadata() {
	const user = await getUser();
	return {
		title: `${ !user?.isAdmin ? "404" : "My Collection" } - Kooponcraft`,
	}
};

const index = async () => {
	const user = await getUser();
	if (!user?.isAdmin) {
		return <Error />
	}

	return (
		<>
			<MyCollection />
		</>
	);
};

export default index;
