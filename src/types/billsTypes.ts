import { Prisma } from "@prisma/client"

export type BillFullRegister = Prisma.BillsGetPayload<{
  include: {client: true, workRegisters: true}
}>
