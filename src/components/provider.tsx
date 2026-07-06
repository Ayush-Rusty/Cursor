"use client";

import React from "react";
import {
  Authenticated,
  Unauthenticated,
  AuthLoading,
  ConvexReactClient,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, UserButton, useAuth } from "@clerk/nextjs";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { UnauthenticatedView } from "../features/auth/component/unauthenticated-view";
import { AuthLoadingView } from "../features/auth/component/authloadingview";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const Providers = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthLoading>
            <AuthLoadingView />
          </AuthLoading>

          <Authenticated>
            {/* User Button */}
            <div className="fixed top-4 right-4 z-50">
              <UserButton afterSignOutUrl="/" />
            </div>

            {children}
          </Authenticated>

          <Unauthenticated>
            <UnauthenticatedView />
          </Unauthenticated>
        </ThemeProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};