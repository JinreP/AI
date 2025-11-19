"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type PageContextType = {
  page: number;
  setPage: (page: number) => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export function PageProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState(0);
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const ctx = useContext(PageContext);
  if (!ctx) {
    throw new Error("usePage must be used inside PageProvider");
  }
  return ctx;
}
