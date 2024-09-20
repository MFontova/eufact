import { updateWorkRegister } from "@/actions/workRegisterActions";
import { db } from "@/services/db";
import { FullRegister } from "@/types/workRegisterTypes";
import { format } from "@formkit/tempo";
import { redirect } from "next/navigation";

export default async function EditWorkRegisterPage({params}: {params: {id: string}}) {
  const workRegister = await db.workRegister.findFirst({where: {id: params.id}, include: {client: true, hourType: true}}) as FullRegister
  const hourTypes = await db.hourType.findMany()

  async function onSubmitHandler(formData: FormData) {
    "use server"
    await updateWorkRegister(workRegister.id, formData)
    redirect('/work-registers')
  }

  return(
    <main>
      <p className="font-semibold" >Edita el registre de {workRegister?.client.name} {workRegister?.client.surname} del {format(workRegister?.createdAt, 'DD/MM/YYYY')} </p>
      <form action={onSubmitHandler} className="flex flex-col max-w-md mx-auto gap-5 my-10">
        <div className="inputWithLabel">
          <label htmlFor="client">Client</label>
          <input type="text" value={`${workRegister.client.name} ${workRegister.client.surname}`} readOnly />
        </div>
        <div className="inputWithLabel">
          <label htmlFor="hourType">{`Tipus d'hora`}</label>
          <select name="hourType" id="hourType" defaultValue={workRegister.hourType.id}>
            <option value="">---</option>
            {
              hourTypes.map(hourType => <option key={hourType.id} value={hourType.id} >{hourType.description} {`(${hourType.price}€)`}</option>)
            }
          </select>
        </div>
        <div className="inputWithLabel">
          <label htmlFor="number">{`Número d'hores`}</label>
          <input type="number" name="number" id="number" defaultValue={workRegister.hourNumber.toString()} />
        </div>
        <button type="submit" className="button mx-auto">Actualitzar registre</button>
      </form>
    </main>
  )
}