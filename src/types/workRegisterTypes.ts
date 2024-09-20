import { Prisma } from "@prisma/client"

export type FullRegister = Prisma.WorkRegisterGetPayload<{
  include: {client: true, hourType: true}
}>