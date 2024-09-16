import { format } from "@formkit/tempo";
import { Prisma } from "@prisma/client";
import { IconCalendar } from "@tabler/icons-react";

type FullRegister = Prisma.WorkRegisterGetPayload<{
  include: {client: true, hourType: true}
}>

export default function WorkRegistersTable({workRegisters}: {workRegisters: FullRegister[]}) {

  return (
    <div className="my-10">
      <div className="grid grid-cols-4 font-semibold border-b py-2">
        <p>Client</p>
        <p>Tipus hora</p>
        <p>{'Preu (€)'}</p>
        <p className="flex items-center gap-2"><IconCalendar size={18} /> Data</p>
      </div>
      {
        workRegisters.map(register => (
          <div key={register.id} className="grid grid-cols-4 py-1 hover:bg-slate-100 transition-all">
            <p>{register.client.name} {register.client.surname}</p>
            <p>{register.hourType.description}</p>
            <p>{register.hourType.price.toString()}</p>
            <p>{format(register.createdAt, 'DD-MM-YYYY')}</p>
          </div>
        ))
      }
    </div>
  )
}