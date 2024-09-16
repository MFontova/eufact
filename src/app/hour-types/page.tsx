import HourTypesTable from "@/components/HourTypesTable"
import { db } from "@/services/db"

export default async function HourTypesPage() {
  const hourTypes = await db.hourType.findMany()
  console.log('hourTypes', hourTypes)
  return (
    <main className="mx-10">
      <h1>Tipus hores</h1>
      <HourTypesTable hourTypes={hourTypes} />
    </main>
  )
}