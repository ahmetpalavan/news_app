/** @format */

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="text-center text-4xl font-serif">
            The {''}
            <span className="underline decoration-4 decoration-orange-400">Palavan</span> {''}
            News 
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* Dark Mode */}
          <button
            className="hidden md:inline bg-slate-900 text-white rounded-full
                px-4 py-2 lg:px-8 lg:py-4 dark:bg-slate-800
            "
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;
