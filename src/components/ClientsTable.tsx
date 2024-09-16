import { Clients } from "@prisma/client";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { deleteClient } from "@/actions/clientsActions";
import { redirect } from "next/navigation";
import { IconPencil } from "@tabler/icons-react";

export default function ClientsTable({clients}: {clients: Clients[]}) {
  
  async function deleteHandler(clientId: string) {
    "use server"
    await deleteClient(clientId)
    redirect('/clients')
  }

  return (
    <div className="my-10">
      <div className="grid grid-cols-5 font-semibold border-b py-2">
        <p>Client</p>
        <p>Email</p>
        <p>Edat</p>
        <p>Ciutat</p>
        <p>Accions</p>
      </div>
      {
        clients.map(client => (
          <div key={client.id} className="grid grid-cols-5 py-1 hover:bg-slate-100 transition-all">
            <p>{client.name} {client.surname}</p>
            <p>{client.email}</p>
            <p>{client.birthdate}</p>
            <p>{client.town}</p>
            <p className="flex gap-2">
              <DeleteButton clientId={client.id} deleteHandler={deleteHandler} />
              <Link href={`/clients/${client.id}`}><IconPencil className="hover:text-cyan-600"/></Link>
            </p>
          </div>
        ))
      }
    </div>
  )
}