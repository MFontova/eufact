"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: 'Clients',
    path: '/clients'
  },
  {
    label: 'Tipus hores',
    path: '/hour-types'
  },
  {
    label: 'Registres',
    path: '/work-registers'
  }
]

export default function Menu() {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex gap-5">
        {
          menuItems.map(item => (
            <Link href={item.path} className={`${pathname == item.path && 'underline'}`} key={item.path} >{item.label}</Link>
          ))
        }
      </ul>
    </nav>
  )
}