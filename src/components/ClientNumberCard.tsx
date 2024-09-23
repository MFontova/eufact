import { db } from "@/services/db";
import { Card } from "./tremor/Card";

export default async function ClientNumberCard() {
  const clientNumber = await db.clients.count()

  return (
    <Card className="max-w-xs mx-auto flex justify-center">
      <p className="font-semibold flex items-center gap-3 text-2xl"><span className="text-4xl">{clientNumber}</span> {clientNumber == 1 ? 'client' : 'clients'}</p>
    </Card>
  )
}