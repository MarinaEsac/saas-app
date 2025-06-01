"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    {label: 'Home', path: '/'},
    {label: 'Companions', path: '/companions'},
    {label: 'My Journey', path: 'my-journey'},
]

const NavItems = () => {
    const pathName = usePathname()
  return (
    <nav className="flex items-center gap-4">
        {navItems.map(({label, path}) => (
            <Link key={label} href={path}
            className={cn(pathName === path && 'text-primary font-semibold')}
            >
            {label}
            </Link>
        ))}
    </nav>
  )
}

export default NavItems