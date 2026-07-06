"use client";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SparkleIcon } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ProjectView = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-sidebar to-muted flex flex-col items-center justify-center p-6 md:p-16">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl" />

      <div className="relative w-full max-w-sm mx-auto flex flex-col gap-6 items-center rounded-3xl border border-border/50 bg-background/70 backdrop-blur-xl shadow-2xl p-8">
        <div className="flex justify-between gap-4 w-full items-center">
          <div className="flex items-center gap-3 w-full group/logo">
            <img
              src="/favicon.ico"
              alt="Polaris"
              className="size-10 md:size-12 rounded-xl ring-1 ring-border shadow-lg transition-transform duration-300 group-hover/logo:scale-110"
            />

            <div>
              <h1
                className={cn(
                  "text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent",
                  font.className
                )}
              >
                Polaris
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => {}}
              className="h-full items-start justify-start p-5 bg-background/80 hover:bg-accent/60 border rounded-2xl flex flex-col gap-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="flex w-full items-center justify-between">
                <div className="rounded-lg bg-blue-500/10 p-2">
                  <SparkleIcon className="size-4 text-blue-500" />
                </div>

                <kbd className="rounded-md border bg-muted px-2 py-1 text-xs font-semibold shadow-sm">
                  Ctrl + P
                </kbd>
              </div>

              
            </Button>

            <Button
              variant="outline"
              onClick={() => {}}
              className="h-full items-start justify-start p-5 bg-background/80 hover:bg-accent/60 border rounded-2xl flex flex-col gap-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="flex w-full items-center justify-between">
                <div className="rounded-lg bg-purple-500/10 p-2">
                  <SparkleIcon className="size-4 text-purple-500" />
                </div>

                <kbd className="rounded-md border bg-muted px-2 py-1 text-xs font-semibold shadow-sm">
                  Ctrl + I
                </kbd>
              </div>

              <div className="text-left">
                
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};