import { ViewTransition } from "react";

// A template remounts on every navigation, so each page exits and enters as its own view transition.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
