"use client"

import { Input } from "./tremor/Input"
import { Label } from "./tremor/Label"

export default function BillMonthInput() {
  return (
    <div>
      <Label>Selecciona el mes</Label>
      <Input type="month" name="month" />
    </div>
  )
}