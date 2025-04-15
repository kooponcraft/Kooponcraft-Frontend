import React from 'react'
import Divider from '../common/Divider'
import StoreItemArea from './StoreItemArea'
import Breadcrumb from '../common/Breadcrumb'

const StoreItem = () => {
  return (
    <>
        <Breadcrumb title="Marketplace" subtitle="Marketplace" />
        <Divider />
        <StoreItemArea />
        <Divider />
    </>
  )
}

export default StoreItem