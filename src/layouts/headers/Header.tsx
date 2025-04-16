"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import DashboardHeader from './DashboardHeader'
import HeaderOne from './HeaderOne'

const Header = () => {
    const pathname = usePathname()

  return (
    <>
      {
        pathname.startsWith("/dashboard") || pathname.startsWith("/live-bids") || pathname.startsWith("/my-collections") || pathname.startsWith("/my-wallet") || pathname.startsWith("/notifications") || pathname.startsWith("/settings") || pathname.startsWith("/my-transactions") || pathname.startsWith("/activity") || pathname.startsWith("/my-tokens") || pathname.startsWith("/my-store") || pathname.startsWith("/collection/create") || pathname.startsWith("/items/create")? <DashboardHeader /> : <HeaderOne />
      }
    </>
  )
}

export default Header