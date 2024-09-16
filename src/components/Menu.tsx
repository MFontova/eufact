"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: 'Clients',
    path: '/clients'
  }
]

export default function Menu() {
  const pathname = usePathname()
  return (
    <nav>
      <ul>
        {
          menuItems.map(item => (
            <Link href={item.path} className={`${pathname == item.path && 'underline'}`} key={item.path} >{item.label}</Link>
          ))
        }
      </ul>
    </nav>
  )
}