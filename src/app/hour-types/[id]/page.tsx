import { updateHourType } from "@/actions/hourTypeActions"
import HourTypeDescriptionInput from "@/components/HourTypeDescriptionInput"
import HourTypePriceInput from "@/components/HourTypePriceInput"
import { Button } from "@/components/tremor/Button"
import { db } from "@/services/db"
import { redirect } from "next/navigation"

export default async function EditHourTypePage({params}: {params: {id: string}}) {
  const hourType = await db.hourType.findUnique({where: {id: params.id}})
  async function formSubmit(formData:FormData) {
    "use server"
    await updateHourType(formData, params.id)
    redirect('/hour-types')
  }
  return (
    <main>
      <h1 className="text-4xl">Crear nou tipus hora</h1>
      <form action={formSubmit} className="flex flex-col max-w-md mx-auto gap-5 my-10">
        <HourTypeDescriptionInput hourType={hourType!} />
        <HourTypePriceInput hourType={hourType!} />
        <Button type="submit">Actualitzar</Button>
      </form>
    </main>
  )
}