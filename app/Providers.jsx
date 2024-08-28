'use client';
import React from 'react'

import { ThemeProvider } from 'next-themes';

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className=' text-slate-800 dark: bg-white dark:text-gray-200 dark:bg-slate-900 min-h-screen select-none transition-colors duration-300  '>
            {children}
        </div>
    </ThemeProvider>
  )
}
