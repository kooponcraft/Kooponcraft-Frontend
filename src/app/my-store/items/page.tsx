import MyStoreItems from '@/components/dashboard/my-store/MyStoreItems'
import Error from '@/components/error';
import { getUser } from '@/lib/auth/getUser';
import React from 'react'

export async function generateMetadata() {
  const user = await getUser();
  return {
    title: `${ !user?.isAdmin ? "404" : "Items | My Store" } - Kooponcraft`,
  }
};

const index = async () => {
  const user = await getUser();
  if (!user?.isAdmin) {
		return <Error />
	}

  return (
    <MyStoreItems />
  )
}

export default index