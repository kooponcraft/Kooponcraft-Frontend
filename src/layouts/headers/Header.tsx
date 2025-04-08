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
            pathname.startsWith("/dashboard") || pathname.startsWith("//live-bids") || pathname.startsWith("/my-collection") || pathname.startsWith("/my-wallet") || pathname.startsWith("/notifications") || pathname.startsWith("/settings") ? <DashboardHeader /> : <HeaderOne />
        }
    </>
  )
}

export default Header