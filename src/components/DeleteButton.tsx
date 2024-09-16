"use client"

import { IconTrash } from "@tabler/icons-react"

export default function DeleteButton({clientId, deleteHandler}: {clientId: string, deleteHandler: (clientId: string) => void}) {
  return (
    <button onClick={() => deleteHandler(clientId)}><IconTrash className="hover:text-red-500" /></button>
  )
}