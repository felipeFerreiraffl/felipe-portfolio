"use client";

import React, { createContext, RefObject, useContext, useRef } from "react";

type SectionKey = "aboutMe" | "experiences" | "skills" | "projects" | "contact";

type SectionRefsContextType = {
  refs: Record<SectionKey, RefObject<HTMLElement | null>>;
};

const SectionRefsContext = createContext<SectionRefsContextType | null>(null);

export const SectionRefsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const refs: Record<SectionKey, RefObject<HTMLElement | null>> = {
    aboutMe: useRef(null),
    experiences: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  return (
    <SectionRefsContext.Provider value={{ refs }}>
      {children}
    </SectionRefsContext.Provider>
  );
};

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);

  if (!context)
    throw new Error(
      "useSectionRefs deve ser utilizado dentro de SectionRefsContext",
    );

  return context.refs;
};
