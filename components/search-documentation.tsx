"use client";

import { useSearchContext } from "fumadocs-ui/contexts/search";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function SearchDocumentation() {
  const { setOpenSearch } = useSearchContext();

  return (
    <Button
      className={cn(
        "relative h-9 w-full justify-start rounded-md text-muted-foreground text-sm sm:pr-12 md:w-40 lg:w-64"
      )}
      onClick={() => setOpenSearch(true)}
      variant="outline"
    >
      <span className="hidden lg:inline-flex">Search documentation...</span>
      <span className="inline-flex lg:hidden">Search...</span>
      <kbd className="pointer-events-none absolute top-1.5 right-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-[10px] opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}
