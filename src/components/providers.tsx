"use client";

import {
  Authenticated,
  Unauthenticated,
  ConvexReactClient,
  AuthLoading,
} from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import { UnauthenticatedView } from "@/features/auth/component/unauthenticated-view";
import { AuthLoadingView } from "@/features/auth/component/authloadingview";
import { ThemeProvider } from "./theme-provider";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full min-h-screen">
            <Authenticated>
              <div className="w-full min-h-screen">
                {children}
              </div>
            </Authenticated>

            <Unauthenticated>
              <UnauthenticatedView />
            </Unauthenticated>

            <AuthLoading>
              <AuthLoadingView />
            </AuthLoading>
          </div>
        </ThemeProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};