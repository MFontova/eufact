import { deleteClient } from "@/actions/clientsActions";
import { Clients } from "@prisma/client";
import { IconPencil } from "@tabler/icons-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteButton from "./DeleteButton";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeaderCell, TableRoot, TableRow } from "./tremor/Table";

export default function ClientsTable({clients}: {clients: Clients[]}) {
  
  async function deleteHandler(clientId: string) {
    "use server"
    await deleteClient(clientId)
    redirect('/clients')
  }

  return (
    <TableRoot>
      <Table>
        <TableCaption>Els teus clients</TableCaption>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Client</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Edat</TableHeaderCell>
            <TableHeaderCell>Ciutat</TableHeaderCell>
            <TableHeaderCell>Accions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            clients.map(client => (
              <TableRow key={client.id}>
                <TableCell>{client.name} {client.surname}</TableCell>
                <TableCell> {client.email} </TableCell>
                <TableCell> {client.birthdate} </TableCell>
                <TableCell> {client.town} </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <DeleteButton itemId={client.id} deleteHandler={deleteHandler} />
                    <Link href={`/clients/${client.id}`}><IconPencil className="hover:text-cyan-600"/></Link>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableRoot>
  )

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
              <DeleteButton itemId={client.id} deleteHandler={deleteHandler} />
              <Link href={`/clients/${client.id}`}><IconPencil className="hover:text-cyan-600"/></Link>
            </p>
          </div>
        ))
      }
    </div>
  )
}