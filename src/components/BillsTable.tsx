import { deleteBill } from "@/actions/billsActions";
import { db } from "@/services/db";
import { BillFullRegister } from "@/types/billsTypes";
import { format } from "@formkit/tempo";
import { IconEye, IconPencil } from "@tabler/icons-react";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRoot, TableRow } from "./tremor/Table";
import { redirect } from "next/navigation";

export default async function BillsTable({bills}: {bills: BillFullRegister[]}) {
  const hourTypes = await db.hourType.findMany()

  async function deleteHandler(billId: string) {
    "use server"
    await deleteBill(billId)
    redirect('/factures')
  }

  return (
    <TableRoot>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Client</TableHeaderCell>
            <TableHeaderCell>{"Total d'hores"}</TableHeaderCell>
            <TableHeaderCell>{"Total preu"}</TableHeaderCell>
            <TableHeaderCell>Mes facturat</TableHeaderCell>
            <TableHeaderCell>Accions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            bills.map(bill => (
              <TableRow key={bill.id}>
                <TableCell>{bill.client.name} {bill.client.surname}</TableCell>
                <TableCell>{bill.workRegisters.reduce((sum, current) => sum + Number(current.hourNumber), 0)}</TableCell>
                <TableCell>{bill.workRegisters.reduce((sum, current) => sum + Number(hourTypes.find(hour => hour.id == current.hourTypeId)?.price), 0)}</TableCell>
                <TableCell>{format(new Date(bill.billingYear, bill.billingMonth, 1), 'MM-YYYY')}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Link href={`factures/${bill.id}`}>
                      <IconEye/>
                    </Link>
                    <DeleteButton deleteHandler={deleteHandler} itemId={bill.id} />
                    <IconPencil className="hover:text-blue-500"/>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableRoot>
  )
}