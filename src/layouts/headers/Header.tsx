"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import DashboardHeader from './DashboardHeader'
import HeaderOne from './HeaderOne'
import adminRoutes from '@/data/adminRoutes'
import { getUser } from '@/lib/auth/getUser'
import dashboardRoutes from '@/data/dashboardRoutes'

const Header = () => {
    const pathname = usePathname()

    // const [user, setUser] = useState<User | null>(null);
    
    //   useEffect(() => {
    //     (
    //       async () => {
    //         setUser(await getUser())
    //       }
    //     )()
    //   }, [])

  return (
    <>
      {
        dashboardRoutes.some(route => pathname.startsWith(route)) ? <DashboardHeader /> : <HeaderOne />
      }
    </>
  )
}

export default Header