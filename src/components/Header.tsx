import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="p-10 flex justify-between items-center border-b">
      <Link href={'/'} className="text-3xl">EuFact</Link>
      <Menu/>
    </header>
  )
}