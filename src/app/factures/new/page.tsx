import { createBill } from "@/actions/billsActions";
import BillMonthInput from "@/components/BillMonthInput";
import ClientSelect from "@/components/ClientSelect";
import { Button } from "@/components/tremor/Button";
import { db } from "@/services/db";
import { redirect } from "next/navigation";

export default async function NewBillPage() {
  const clients = await db.clients.findMany()

  async function formAction(formData: FormData) {
    "use server"
    const clientId = formData.get('client') as string
    const month = formData.get('month') as string
    createBill(clientId, month)
    redirect('/factures')
  }

  return (
    <main>
      <h1 className="text-4xl">Facturar</h1>
      <form action={formAction} className="max-w-lg mx-auto flex flex-col gap-5">
        <ClientSelect clients={clients} />
        <BillMonthInput/>
        <Button type="submit" className="max-w-xs mx-auto">Facturar</Button>
      </form>
    </main>
  )
}