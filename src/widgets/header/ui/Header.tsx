import { memo } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Options } from "./Options";

export const Header = memo(() => {
  return (
    <header className="bg-slate-200 dark:bg-black dark:text-white">
      <nav
        className="
          container mx-auto 
          flex items-center justify-between 
          py-4 gap-3 px-3
          flex-nowrap
        "
      >
        <Logo />
        <div className="hidden sm:block">
          <Navigation />
        </div>
        <Options />
      </nav>
    </header>
  );
});
