"use client";

import { useDocsSearch } from "fumadocs-core/search/client";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";
import { useI18n } from "fumadocs-ui/contexts/i18n";

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n();
  const { search, setSearch, query } = useDocsSearch({
    type: "fetch",
    locale,
  });

  return (
    <SearchDialog {...props} onSearchChange={setSearch} search={search}>
      <SearchDialogOverlay />
      <SearchDialogContent className="rounded-lg">
        <SearchDialogHeader className="border-b pb-2">
          <SearchDialogInput placeholder="Search documentation..." />
          <SearchDialogClose className="text-muted-foreground hover:text-foreground">
            <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-[10px] sm:flex">
              ESC
            </kbd>
          </SearchDialogClose>
        </SearchDialogHeader>
        <SearchDialogList
          items={
            query.data === "empty"
              ? []
              : (query.data ?? []).map((item) => ({
                  ...item,
                  href: item.url,
                }))
          }
        />
      </SearchDialogContent>
    </SearchDialog>
  );
}
