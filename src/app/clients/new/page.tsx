import { createClient } from "@/actions/clientsActions";
import ClientBirthdateInput from "@/components/ClientBirthdateInput";
import ClientEmailInput from "@/components/ClientEmailInput";
import ClientNameInput from "@/components/ClientNameInput";
import ClientSurnameInput from "@/components/ClientSurnameInput";
import ClientTownInput from "@/components/ClientTownInput";
import { Button } from "@/components/tremor/Button";
import { redirect } from "next/navigation";

export default async function CreateClientPage() {
  async function formSubmit(formData:FormData) {
    "use server"
    await createClient(formData)
    redirect('/clients');
  }
  return(
    <main>
      <h1 className="text-4xl">Crear nou client</h1>
      <form action={formSubmit} className="flex flex-col max-w-md mx-auto gap-5 my-10">
        <ClientNameInput/>
        <ClientSurnameInput/>
        <ClientEmailInput/>
        <ClientBirthdateInput/>
        <ClientTownInput/>
        <Button type="submit">Crear</Button>
      </form>
    </main>
  )
}