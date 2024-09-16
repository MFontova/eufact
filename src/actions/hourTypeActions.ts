import { db } from "@/services/db"

export async function createHourType(formData: FormData) {
  const description = formData.get('description') as string | null;
  const price = formData.get('price') as string | null;
  
  if (!description || !price) {
    throw new Error("All fields are required.");
  }

  const data = { description, price };

  await db.hourType.create({ data });
}

export async function updateHourType(formData: FormData, hourTypeId: string) {
  const description = formData.get('description') as string | null;
  const price = formData.get('price') as string | null;
  
  if (!description || !price) {
    throw new Error("All fields are required.");
  }

  const data = { description, price };

  await db.hourType.update({where: {id: hourTypeId}, data: data})
}

export async function deleteHourType(hourTypeId: string) {
  await db.hourType.delete({where: {id: hourTypeId}})
}