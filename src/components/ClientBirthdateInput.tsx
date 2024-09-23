"use client"

import { Clients } from "@prisma/client";
import { Input } from "./tremor/Input";
import { Label } from "./tremor/Label";

export default function ClientBirthdateInput({client}: {client?: Clients}) {
  return(
    <div>
      <Label>Data de naixement</Label>
      <Input name="birthdate" type="date" defaultValue={client?.birthdate} />
    </div>
  )
}