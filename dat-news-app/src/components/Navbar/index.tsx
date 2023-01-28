import Link from "next/link";
import React from "react";
import { useNavigation } from "@pankod/refine-core";

const navigationItems = [
  {
    title: "Home",
    href: "/news",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function index() {
  const { list } = useNavigation();
  return (
    <div>
      <div className="hidden md:block">
        <header className="flex flex-row items-center h-12 shadow-lg md:block">
          <div className="flex flex-row gap-4 ml-12">
            {navigationItems.map((item, i) => (
              <div
                className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500 py-2
              "
                key={i}
              >
                <Link href={item.href}>{item.title}</Link>
              </div>
            ))}
          </div>
        </header>
      </div>
    </div>
  );
}
