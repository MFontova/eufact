"use client"

import { HourType } from "@prisma/client";
import { Input } from "./tremor/Input";
import { Label } from "./tremor/Label";

export default function HourTypePriceInput({hourType}: {hourType?: HourType}) {
  return (
    <div>
      <Label>Preu hora</Label>
      <Input name="price" type="number" min={0} defaultValue={hourType?.price.toString()} />
    </div>
  )
}