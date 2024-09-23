"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/tremor/Select";
import { Clients } from "@prisma/client";
import { Label } from "./tremor/Label";

export default function ClientSelect({clients}: {clients: Clients[]}) {
  return(
    <div>
      <Label htmlFor="client">Selecciona un client</Label>
      <Select name="client">
        <SelectTrigger>
          <SelectValue placeholder="Selecciona un client" />
        </SelectTrigger>
        <SelectContent>
          {
            clients.map(client => (
              <SelectItem key={client.id} value={client.id} >{client.name} {client.surname}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  )
}