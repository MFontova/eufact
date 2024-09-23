import ClientsTable from "@/components/ClientsTable"
import { Button } from "@/components/tremor/Button"
import { db } from "@/services/db"
import Link from "next/link"

export default async function ClientsPage() {
  const clients = await db.clients.findMany()
  return (
    <main>
      <h1 className="text-4xl">Els teus clients</h1>
      <div className="flex justify-end">
        <Button>
          <Link href={'/clients/new'} >Crear nou client</Link>
        </Button>
      </div>
      <ClientsTable clients={clients} />
    </main>
  )
}