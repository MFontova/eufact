import { updateWorkRegister } from "@/actions/workRegisterActions";
import ClientSelect from "@/components/ClientSelect";
import HourNumberInput from "@/components/HourNumberInput";
import HourTypeSelect from "@/components/HourTypeSelect";
import { Button } from "@/components/tremor/Button";
import { db } from "@/services/db";
import { FullRegister } from "@/types/workRegisterTypes";
import { format } from "@formkit/tempo";
import { redirect } from "next/navigation";

export default async function EditWorkRegisterPage({params}: {params: {id: string}}) {
  const workRegister = await db.workRegister.findFirst({where: {id: params.id}, include: {client: true, hourType: true}}) as FullRegister
  const hourTypes = await db.hourType.findMany()
  const clients = await db.clients.findMany()

  async function onSubmitHandler(formData: FormData) {
    "use server"
    await updateWorkRegister(workRegister.id, formData)
    redirect('/work-registers')
  }

  return(
    <main>
      <p className="font-semibold" >Edita el registre de {workRegister?.client.name} {workRegister?.client.surname} del {format(workRegister?.createdAt, 'DD/MM/YYYY')} </p>
      <form action={onSubmitHandler} className="flex flex-col max-w-md mx-auto gap-5 my-10">
        <ClientSelect clients={clients} workRegister={workRegister} />
        <HourTypeSelect hourTypes={hourTypes} workRegister={workRegister} />
        <HourNumberInput workRegister={workRegister} />
        <Button type="submit" >Actualitzar</Button>
      </form>
    </main>
  )
}