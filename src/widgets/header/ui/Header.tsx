// Header.tsx
import { memo } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Options } from "./Options";

export const Header = memo(() => {
  return (
    <header className="bg-slate-200 dark:bg-black dark:text-white">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-center py-4 gap-4 sm:gap-0">
        <Logo />
        <Navigation />
        <Options />
      </nav>
    </header>
  );
});
