import WorkRegistersTable from "@/components/WorkRegistersTable"
import { db } from "@/services/db"
import Link from "next/link"

export default async function WorkRegisters() {
  const workRegisters = await db.workRegister.findMany({include: {client: true, hourType: true}})

  return(
    <main>
      <h1 className="text-4xl">Registres</h1>
      <div className="flex justify-end">
        <Link href={'/work-registers/new'} className="button" >Nou registre</Link>
      </div>
      <WorkRegistersTable workRegisters={workRegisters} />
    </main>
  )
}