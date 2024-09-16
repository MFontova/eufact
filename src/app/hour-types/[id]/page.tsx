import { updateHourType } from "@/actions/hourTypeActions"
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
        <div className="inputWithLabel">
          <label htmlFor="">Descripció</label>
          <input type="text" name="description" id="description" defaultValue={hourType?.description} required />
        </div>
        <div className="inputWithLabel">
          <label htmlFor="">Preu hora</label>
          <input type="number" name="price" id="price" defaultValue={hourType?.price.toNumber()} required />
        </div>
        <button type="submit" className="button self-center">Crear</button>
      </form>
    </main>
  )
}