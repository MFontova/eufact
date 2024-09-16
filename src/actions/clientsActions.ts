import { db } from "@/services/db"

export async function createClient(formData: FormData) {
  // "use server"
  const name = formData.get('name') as string | null;
  const surname = formData.get('surname') as string | null;
  const email = formData.get('email') as string | null;
  const birthdate = formData.get('birthdate') as string | null;
  const town = formData.get('town') as string | null;

  if (!name || !surname || !email || !birthdate || !town) {
    throw new Error("All fields are required.");
  }

  const data = { name, surname, email, birthdate, town };

  await db.clients.create({ data });
}

export async function updateClient(formData: FormData, clientId: string) {
  const name = formData.get('name') as string | null;
  const surname = formData.get('surname') as string | null;
  const email = formData.get('email') as string | null;
  const birthdate = formData.get('birthdate') as string | null;
  const town = formData.get('town') as string | null;

  if (!name || !surname || !email || !birthdate || !town) {
    throw new Error("All fields are required.");
  }

  const data = { name, surname, email, birthdate, town };

  await db.clients.update({where: {id: clientId}, data: data})
}

export async function deleteClient(clientId: string) {
  await db.clients.delete({where: {id: clientId}})
}