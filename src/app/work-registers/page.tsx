import { Button } from "@/components/tremor/Button"
import WorkRegistersTable from "@/components/WorkRegistersTable"
import { db } from "@/services/db"
import Link from "next/link"

export default async function WorkRegisters() {
  const workRegisters = await db.workRegister.findMany({include: {client: true, hourType: true}})

  return(
    <main>
      <h1 className="text-4xl">Registres</h1>
      <div className="flex justify-end">
        <Button>
          <Link href={'/work-registers/new'} >Nou registre</Link>
        </Button>
      </div>
      <WorkRegistersTable workRegisters={workRegisters} />
    </main>
  )
}