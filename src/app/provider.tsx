"use client"

import { ThemeProvider } from 'next-theme'
import React from 'react'

const Provider = ({ children }: { 
    children: React.ReactNode
 }) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme='system'>
        {children}
    </ThemeProvider>
  )
}

export default Provider