"use client"

import { Clients } from "@prisma/client";
import { Input } from "./tremor/Input";
import { Label } from "./tremor/Label";

export default function ClientSurnameInput({client}: {client?: Clients}) {
  return(
    <div>
      <Label>Cognom</Label>
      <Input name="surname" defaultValue={client?.surname} />
    </div>
  )
}