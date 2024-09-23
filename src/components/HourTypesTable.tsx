import { deleteHourType } from "@/actions/hourTypeActions";
import { HourType } from "@prisma/client";
import { IconPencil } from "@tabler/icons-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteButton from "./DeleteButton";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeaderCell, TableRoot, TableRow } from "./tremor/Table";

export default function HourTypesTable({hourTypes}: {hourTypes: HourType[]}) {
  
  async function deleteHandler(hourTypeId: string) {
    "use server"
    await deleteHourType(hourTypeId)
    redirect('/hour-types')
  }

  return (
    <TableRoot>
      <Table>
        <TableCaption>{"Tipus d'hores"}</TableCaption>
        <TableHead>
          <TableHeaderCell>{"Tipus d'hora"}</TableHeaderCell>
          <TableHeaderCell>Preu</TableHeaderCell>
          <TableHeaderCell>Accions</TableHeaderCell>
        </TableHead>
        <TableBody>
          {
            hourTypes.map(hour => (
              <TableRow key={hour.id}>
                <TableCell>{hour.description}</TableCell>
                <TableCell>{hour.price.toString()}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <DeleteButton itemId={hour.id} deleteHandler={deleteHandler} />
                    <Link href={`/hour-types/${hour.id}`}><IconPencil className="hover:text-cyan-600"/></Link>
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
      <div className="grid grid-cols-3 font-semibold border-b py-2">
        <p>Tipus hora</p>
        <p>{'Preu (€)'}</p>
        <p>Accions</p>
      </div>
      {
        hourTypes.map(hourType => (
          <div key={hourType.id} className="grid grid-cols-3 py-1 hover:bg-slate-100 transition-all">
            <p>{hourType.description}</p>
            <p>{hourType.price.toString()}</p>
            <p className="flex gap-2">
              <DeleteButton itemId={hourType.id} deleteHandler={deleteHandler} />
              <Link href={`/hour-types/${hourType.id}`}><IconPencil className="hover:text-cyan-600"/></Link>
            </p>
          </div>
        ))
      }
    </div>
  )
}