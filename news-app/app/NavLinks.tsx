/** @format */

"use client";

import { categories } from "../constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <nav
      className="grid grid-cols-3 md:grid-cols-7 text-xs md:text-sm
        border-b gap-4 pb-10 max-w-6xl mx-auto"
    >
      {categories.map((category) => (
        <NavLink isActive={isActive(category)} key={category} category={category} />
      ))}
    </nav>
  );
}

export default NavLinks;
