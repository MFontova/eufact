import { updateClient } from "@/actions/clientsActions"
import { db } from "@/services/db"
import { redirect } from "next/navigation"

export default async function ClientEditPage({params}: {params: {id: string}}) {
  const client = await db.clients.findFirst({where: {id: params.id}})

  async function formSubmit(formData: FormData) {
    "use server"
    await updateClient(formData, params.id)
    redirect('/clients')
  }

  return(
    <main>
      <p>Edita el client <span className="font-semibold" >{client?.name} {client?.surname}</span></p>
      <form action={formSubmit} className="flex flex-col max-w-md mx-auto gap-5 my-10">
        <label htmlFor="name">Nom</label>
        <input type="text" name="name" id="name" defaultValue={client?.name} required />

        <label htmlFor="surname">Cognom</label>
        <input type="text" name="surname" id="surname" defaultValue={client?.surname} required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" defaultValue={client?.email} required />

        <label htmlFor="birthdate">Data de naixement</label>
        <input type="date" name="birthdate" id="birthdate" defaultValue={client?.birthdate} required />

        <label htmlFor="town">Població</label>
        <input type="text" name="town" id="town" defaultValue={client?.town} required />

        <button type="submit" className="button self-center">Actualitzar</button>
      </form>
    </main>
  )
}