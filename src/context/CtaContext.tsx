"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface CtaContextType {
  expanded: boolean;
  setExpanded: (v: boolean) => void;
}

const CtaContext = createContext<CtaContextType>({
  expanded: true,
  setExpanded: () => {},
});

export function CtaProvider({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <CtaContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </CtaContext.Provider>
  );
}

export function useCtaState() {
  return useContext(CtaContext);
}
