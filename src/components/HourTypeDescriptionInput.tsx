"use client"

import { HourType } from "@prisma/client";
import { Input } from "./tremor/Input";
import { Label } from "./tremor/Label";

export default function HourTypeDescriptionInput({hourType}: {hourType?: HourType}) {
  return (
    <div>
      <Label>Descripció</Label>
      <Input name="description" defaultValue={hourType?.description} />
    </div>
  )
}