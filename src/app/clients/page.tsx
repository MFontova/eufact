import ClientsTable from "@/components/ClientsTable"
import { db } from "@/services/db"
import Link from "next/link"

export default async function ClientsPage() {
  const clients = await db.clients.findMany()
  return (
    <main className="mx-10">
      <h1 className="text-4xl">Els teus clients</h1>
      <div className="flex justify-end">
        <Link href={'/clients/new'} className="max-w-fit border rounded-md px-3 py-1 border-cyan-700 text-cyan-700 hover:shadow-md transition-all" >Crear nou client</Link>
      </div>
      <ClientsTable clients={clients} />
    </main>
  )
}