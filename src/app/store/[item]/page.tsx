import StoreItem from '@/components/store'
import { getStores } from '@/lib/getStores'
import React from 'react'

export async function generateMetadata({ params }: {
  params: Promise<{ item: string }>
}) {
  const { item } = await params
  const stores = await getStores()
  const username = stores.find((store: any) => (store.username as string).split(" ")[0].toLowerCase() == item)?.username
  return {
    title: `${username} | Store - Kooponcraft`,
  }
}

const index = () => {
  return (
    <StoreItem />
  )
}

export default index