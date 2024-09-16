import { db } from "@/services/db";

export async function createWorkRegister(formData:FormData) {
  const client = formData.get('client') as string
  const hourType = formData.get('hourType') as string
  const hoursNumber = formData.get('number') as string
  await db.workRegister.create({data: {hourNumber: hoursNumber, clientId: client, hourTypeId: hourType}})
}