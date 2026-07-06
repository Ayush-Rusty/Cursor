"use client";

import { ShieldAlertIcon } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/src/components/ui/item";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/src/components/ui/button";

export const UnauthenticatedView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/40 to-background px-4">
      <div className="w-full max-w-xl rounded-2xl border bg-card p-8 shadow-xl">
        <Item variant="outline" className="border-0 shadow-none">
          <ItemMedia>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <ShieldAlertIcon className="h-8 w-8 text-destructive" />
            </div>
          </ItemMedia>

          <ItemContent className="space-y-2">
            <ItemTitle className="text-2xl font-bold tracking-tight">
              Unauthorized Access
            </ItemTitle>

            <ItemDescription className="text-base text-muted-foreground">
              You need to sign in before you can access this page. Please
              authenticate using your account to continue.
            </ItemDescription>
          </ItemContent>

          <ItemActions className="mt-6">
            <SignInButton mode="modal">
              <Button size="lg" className="w-full sm:w-auto">
                Sign In
              </Button>
            </SignInButton>
          </ItemActions>
        </Item>
      </div>
    </div>
  );
};