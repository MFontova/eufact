import { createWorkRegister } from "@/actions/workRegisterActions"
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
        <div className="inputWithLabel">
          <label htmlFor="client">Client</label>
          <select name="client" required>
            <option value="">---</option>
            {
              clients.map(client => <option key={client.id} value={client.id}>{client.name} {client.surname}</option>)
            }
          </select>
        </div>
        <div className="inputWithLabel">
          <label htmlFor="hourType">{`Tipus d'hora`}</label>
          <select name="hourType" id="hourType">
            <option value="">---</option>
            {
              hourTypes.map(hourType => <option key={hourType.id} value={hourType.id} >{hourType.description} {`(${hourType.price}€)`}</option>)
            }
          </select>
        </div>
        <div className="inputWithLabel">
          <label htmlFor="number">{`Número d'hores`}</label>
          <input type="number" name="number" id="number" />
        </div>
        <button type="submit" className="button mx-auto">Crear registre</button>
      </form>
    </main>
  )
}