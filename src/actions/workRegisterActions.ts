import { db } from "@/services/db";

export async function createWorkRegister(formData:FormData) {
  const client = formData.get('client') as string
  const hourType = formData.get('hourType') as string
  const hoursNumber = formData.get('number') as string
  await db.workRegister.create({data: {hourNumber: hoursNumber, clientId: client, hourTypeId: hourType}})
}

export async function updateWorkRegister(id: string, formData:FormData) {
  const hourType = formData.get('hourType') as string
  const hoursNumber = formData.get('number') as string
  await db.workRegister.update({where: {id: id}, data: {hourTypeId: hourType, hourNumber: hoursNumber}})
}

export async function deleteWorkRegister(workRegisterId: string) {
  await db.workRegister.delete({where: {id: workRegisterId}})
}