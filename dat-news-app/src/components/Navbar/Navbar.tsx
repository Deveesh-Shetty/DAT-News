import Link from "next/link"
import React from "react"
import { useNavigation } from "@pankod/refine-core"

const navigationItems = [
  {
    title: "Home",
    href: "/",
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
]

export default function Navbar() {
  const { list } = useNavigation()
  return (
    <div>
      <div className="hidden md:block">
        <header className="flex flex-row items-center shadow-lg md:block">
          <div className="flex flex-row gap-8 mx-12 py-4">
            {navigationItems.map((item, i) => (
              <div
                className="list-item hover:text-blue-500 transition-colors duration-300"
                key={i}
              >
                <Link href={item.href}>{item.title}</Link>
              </div>
            ))}
          </div>
        </header>
      </div>
    </div>
  )
}
