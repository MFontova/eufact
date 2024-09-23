"use client"

import { WorkRegister } from "@prisma/client"
import { Input } from "./tremor/Input"
import { Label } from "./tremor/Label"

export default function HourNumberInput({workRegister}: {workRegister?: WorkRegister}) {
  return (
    <div>
      <Label>{"Número d'hores"}</Label>
      <Input name="number" type="number" defaultValue={workRegister?.hourNumber.toString()} />
    </div>
  )
}