"use client"

import { Clients } from "@prisma/client";
import { Input } from "./tremor/Input";
import { Label } from "./tremor/Label";

export default function ClientTownInput({client}: {client?: Clients}) {
  return(
    <div>
      <Label>Població</Label>
      <Input name="town" defaultValue={client?.town} />
    </div>
  )
}