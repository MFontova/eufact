import { createClient } from "@/actions/clientsActions";
import { redirect } from "next/navigation";

export default async function CreateClientPage() {
  async function formSubmit(formData:FormData) {
    "use server"
    await createClient(formData)
    redirect('/clients');
  }
  return(
    <main className="mx-10">
      <h1 className="text-4xl">Crear nou client</h1>
      <form action={formSubmit} className="flex flex-col max-w-md mx-auto gap-5 my-10">
        <div className="inputWithLabel">
          <label htmlFor="name">Nom</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="surname">Cognom</label>
          <input type="text" name="surname" id="surname" required />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="birthdate">Data de naixement</label>
          <input type="date" name="birthdate" id="birthdate" required />
        </div>

        <div className="inputWithLabel">
          <label htmlFor="town">Població</label>
          <input type="text" name="town" id="town" required />
        </div>

        <button type="submit" className="button self-center">Crear</button>
      </form>
    </main>
  )
}