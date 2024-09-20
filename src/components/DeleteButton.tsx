"use client"

import { IconTrash } from "@tabler/icons-react"

export default function DeleteButton({itemId, deleteHandler}: {itemId: string, deleteHandler: (clientId: string) => void}) {
  return (
    <button onClick={() => deleteHandler(itemId)}><IconTrash className="hover:text-red-500" /></button>
  )
}