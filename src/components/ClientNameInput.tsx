"use client"

import { Clients } from "@prisma/client";
import { Input } from "./tremor/Input";
import { Label } from "./tremor/Label";

export default function ClientNameInput({client}: {client?: Clients}) {
  return(
    <div>
      <Label>Nom</Label>
      <Input name="name" defaultValue={client?.name} />
    </div>
  )
}