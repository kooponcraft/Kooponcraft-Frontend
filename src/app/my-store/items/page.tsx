import MyStoreItems from '@/components/dashboard/my-store/MyStoreItems'
import Error from '@/components/error';
import { getUser } from '@/lib/auth/getUser';
import React from 'react'

const user = await getUser();
export const metadata = {
	title: `${ !user?.isAdmin ? "404" : "Items | My Store" } - Kooponcraft`,
};

const index = () => {
  if (!user?.isAdmin) {
		return <Error />
	}

  return (
    <MyStoreItems />
  )
}

export default index