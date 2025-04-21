import React, { Suspense } from 'react'
import SwapArea from './InitSwap'

const InitSwap = () => {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <SwapArea />
      </Suspense>
    </>
  )
}

export default InitSwap