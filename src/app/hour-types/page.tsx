import HourTypesTable from "@/components/HourTypesTable"
import { db } from "@/services/db"
import Link from "next/link"

export default async function HourTypesPage() {
  const hourTypes = await db.hourType.findMany()
  console.log('hourTypes', hourTypes)
  return (
    <main>
      <h1 className="text-4xl">Tipus hores</h1>
      <div className="flex justify-end">
        <Link href={'/hour-types/new'} className="button" >Agefir nou tipus hora</Link>
      </div>
      <HourTypesTable hourTypes={hourTypes} />
    </main>
  )
}