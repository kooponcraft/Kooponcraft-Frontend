import MyStore from "@/components/dashboard/my-store";
import Error from "@/components/error";
import { getUser } from "@/lib/auth/getUser";
import React from "react";

const user = await getUser();
export const metadata = {
    title: `${ !user?.isAdmin ? "404" : "My Store" } - Kooponcraft`,
};

const index = () => {
    if (!user?.isAdmin) {
		return <Error />
	}

    return (
        <>
            <MyStore />
        </>
    );
};

export default index;
