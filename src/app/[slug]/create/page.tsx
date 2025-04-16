import CreateNew from "@/components/dashboard/create-new";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }: any) {
	const { slug } = await params
	return {
		title: `Create New | ${slug} - Kooponcraft`,
	}
  }

const index = () => {
	return (
		<>
			<CreateNew />
		</>
	);
};

export default index;
