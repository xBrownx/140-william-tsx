import * as React from "react";

type FunctionProps = {
  pageRef: React.RefObject<HTMLElement>;
};

export const usePageRef = () => {
  const pageRefs = {
    landing: React.useRef<HTMLElement>(null),
    home: React.useRef<HTMLElement>(null),
  };

  const navigateTo: React.FC<FunctionProps> = ({ pageRef }) => {
    if (pageRef.current !== null) {
      pageRef.current.scrollIntoView({ behavior: "smooth" });
    }
    return null;
  };

  return { pageRefs, navigateTo };
};
