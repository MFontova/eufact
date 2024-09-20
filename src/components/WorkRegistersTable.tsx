import { deleteWorkRegister } from "@/actions/workRegisterActions";
import { FullRegister } from "@/types/workRegisterTypes";
import { format } from "@formkit/tempo";
import { IconCalendar, IconClock, IconCurrencyEuro, IconManualGearbox, IconPencil } from "@tabler/icons-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteButton from "./DeleteButton";

const workRegistersTableHeaders = [
  {
    description: "Client",
    icon: <IconCalendar/>,
  },
  {
    description: "Tipus d'hora",
    icon: <IconClock/>
  },
  {
    description: "Preu",
    icon: <IconCurrencyEuro/>
  },
  {
    description: "Número d'hores",
    icon: <IconClock/>
  },
  {
    description: "Data",
    icon: <IconCalendar/>
  },
  {
    description: "Acions",
    icon: <IconManualGearbox/>
  },
]

export default function WorkRegistersTable({workRegisters}: {workRegisters: FullRegister[]}) {

  async function deleteHandler(clientId: string) {
    "use server"
    await deleteWorkRegister(clientId)
    redirect('/work-registers')
  }

  return (
    <table className="table-auto w-full my-10">
      <thead className="bg-slate-400 text-white">
        <tr>
          {
            workRegistersTableHeaders.map(header => (
              <th className="text-start py-3 px-3" key={header.description}><span className="flex gap-2" >{header.icon}{header.description}</span></th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          workRegisters.map(workRegister => (
            <tr className="border-b border-collapse hover:bg-slate-100 transition-all" key={workRegister.id}>
              <td className="p-3 font-semibold">{workRegister.client.name} {workRegister.client.surname}</td>
              <td className="p-3">{workRegister.hourType.description}</td>
              <td className="p-3">{workRegister.hourType.price.toString()}€</td>
              <td className="p-3">{workRegister.hourNumber.toString()} {workRegister.hourNumber.toNumber() == 1 ? 'hora' : 'hores'}</td>
              <td className="p-3">{format(workRegister.createdAt)}</td>
              <td className="p-3 flex gap-2 items-center">
                <DeleteButton itemId={workRegister.id} deleteHandler={deleteHandler} />
                <Link href={`/work-registers/${workRegister.id}`}><IconPencil className="hover:text-cyan-600"/></Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}