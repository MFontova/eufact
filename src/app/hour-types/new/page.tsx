import { createHourType } from "@/actions/hourTypeActions"
import HourTypeDescriptionInput from "@/components/HourTypeDescriptionInput"
import HourTypePriceInput from "@/components/HourTypePriceInput"
import { Button } from "@/components/tremor/Button"
import { redirect } from "next/navigation"

export default async function CreateHourTypePage() {
  async function formSubmit(formData:FormData) {
    "use server"
    await createHourType(formData)
    redirect('/hour-types')
  }
  return (
    <main>
      <h1 className="text-4xl">Crear nou tipus hora</h1>
      <form action={formSubmit} className="flex flex-col max-w-md mx-auto gap-5 my-10">
        <HourTypeDescriptionInput />
        <HourTypePriceInput />
        <Button type="submit">Crear</Button>
        {/* <div className="inputWithLabel">
          <label htmlFor="">Preu hora</label>
          <input type="number" name="price" id="price" required />
        </div> */}
        {/* <button type="submit" className="button self-center">Crear</button> */}
      </form>
    </main>
  )
}