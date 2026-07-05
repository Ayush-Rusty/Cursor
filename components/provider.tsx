"use client"

import { ReactNode } from 'react'
import { ConvexReactClient,Authenticated } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { useAuth } from '@clerk/nextjs'
import { ThemeProvider } from './providers/theme-provider'


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Authenticated>
            {children}
          </Authenticated>
        </ThemeProvider>
    </ConvexProviderWithClerk>
  )
}