import { deleteHourType } from "@/actions/hourTypeActions";
import { HourType } from "@prisma/client";
import { IconPencil } from "@tabler/icons-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteButton from "./DeleteButton";

export default function HourTypesTable({hourTypes}: {hourTypes: HourType[]}) {
  
  async function deleteHandler(hourTypeId: string) {
    "use server"
    await deleteHourType(hourTypeId)
    redirect('/hour-types')
  }

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
              <DeleteButton clientId={hourType.id} deleteHandler={deleteHandler} />
              <Link href={`/clients/${hourType.id}`}><IconPencil className="hover:text-cyan-600"/></Link>
            </p>
          </div>
        ))
      }
    </div>
  )
}