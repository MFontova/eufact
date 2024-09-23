"use client"

import { Input } from "./tremor/Input";
import { Label } from "./tremor/Label";

export default function DiscountInput() {
  return (
    <div>
      <Label>Aplica un descompte</Label>
      <Input name="discount"/>
    </div>
  )
}