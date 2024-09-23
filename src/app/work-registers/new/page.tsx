import { createWorkRegister } from "@/actions/workRegisterActions"
import ClientSelect from "@/components/ClientSelect"
import HourNumberInput from "@/components/HourNumberInput"
import HourTypeSelect from "@/components/HourTypeSelect"
import { Button } from "@/components/tremor/Button"
import { db } from "@/services/db"
import { redirect } from "next/navigation"

export default async function CreateWorkRegisterPage() {
  async function onSubmitHandler(formData:FormData) {
    "use server"
    console.log(formData)
    await createWorkRegister(formData)
    redirect('/work-registers')
  }

  const clients = await db.clients.findMany()
  const hourTypes = await db.hourType.findMany()

  return(
    <main>
      <h1 className="text-4xl">Crear un nou registre</h1>
      <form action={onSubmitHandler} className="flex flex-col max-w-md mx-auto gap-5 my-10">
        <ClientSelect clients={clients} />
        <HourTypeSelect hourTypes={hourTypes} />
        <HourNumberInput />
        <Button>Crear registre</Button>
      </form>
    </main>
  )
}