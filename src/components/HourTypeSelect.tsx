"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/tremor/Select";
import { HourType, WorkRegister } from "@prisma/client";
import { Label } from "./tremor/Label";

export default function HourTypeSelect({hourTypes, workRegister}: {hourTypes: HourType[], workRegister?: WorkRegister}) {
  return(
    <div>
      <Label htmlFor="client">{"Tipus d'hora"}</Label>
      <Select name="hourType" defaultValue={workRegister?.hourTypeId}>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona un tipus d'hora" />
        </SelectTrigger>
        <SelectContent>
          {
            hourTypes.map(hourType => (
              <SelectItem key={hourType.id} value={hourType.id} >{hourType.description} {`(${hourType.price.toString()}€)`}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  )
}