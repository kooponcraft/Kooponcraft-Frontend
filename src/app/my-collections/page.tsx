import React from "react";
import MyCollection from "@/components/dashboard/my-collection";
import { getUser } from "@/lib/auth/getUser";
import Error from "@/components/error";

const user = await getUser();

export const metadata = {
	title: `${ !user?.isAdmin ? "404" : "My Collection" } - Kooponcraft`,
};

const index = async () => {
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
