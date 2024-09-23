import { db } from "@/services/db";

export async function createBill(clientId: string, month:string) {
  console.log(clientId, month)
  const billingMonth = Number(month.split('-')[1])
  const billingYear = Number(month.split('-')[0])

  console.log('billing year', Number(billingYear))
  console.log(new Date(billingYear, billingMonth - 1, 1))

  const workRegisterIds = await db.workRegister.findMany(
    {
      where: {
        createdAt: {
          gte: new Date(billingYear, billingMonth - 1, 1),
          lte: new Date(billingYear, billingMonth, 1)
        },
        AND: {
          clientId: clientId
        }
      },
    }
  )
  console.log(workRegisterIds)

  await db.bills.create({data: {billingMonth, billingYear, clientId, workRegisters: {connect: workRegisterIds}}})
}

export async function deleteBill(billId: string) {
  await db.bills.delete({where: {id: billId}})
}