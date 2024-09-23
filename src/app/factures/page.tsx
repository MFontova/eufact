import BillsTable from "@/components/BillsTable";
import { Button } from "@/components/tremor/Button";
import { db } from "@/services/db";
import Link from "next/link";

export default async function BillsPage() {
  const bills = await db.bills.findMany({include: {client: true, workRegisters: true}})

  return (
    <main>
      <h1 className="text-4xl">Factures</h1>
      <section className="my-10">
        <div className="justify-end flex">
          <Button><Link href={'/factures/new'}>Nova factura</Link></Button>
        </div>
        <BillsTable bills={bills} />
      </section>
    </main>
  )
}