"use client"

import { Clients } from "@prisma/client";
import { Input } from "./tremor/Input";
import { Label } from "./tremor/Label";

export default function ClientEmailInput({client}: {client?: Clients}) {
  return(
    <div>
      <Label>Email</Label>
      <Input type="email" name="email" defaultValue={client?.email} />
    </div>
  )
}