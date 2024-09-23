import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/tremor/Table"
import { db } from "@/services/db"
import { format } from "@formkit/tempo"

export default async function BillDetailPage({params}: {params: {id: string}}) {
  const bill = await db.bills.findUnique({where: {id: params.id}, include: {client: true, workRegisters: true}})
  const hourTypes = await db.hourType.findMany()
  return (
    <main>
      <h1>Factura de {bill?.billingMonth}/{bill?.billingYear} de {bill?.client.name} {bill?.client.surname} </h1>
      <section className="my-10">
        <TableRow>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Concepte</TableHeaderCell>
                <TableHeaderCell>Data</TableHeaderCell>
                <TableHeaderCell>{"Quantitat (hores)"}</TableHeaderCell>
                <TableHeaderCell>{"Preu (€)"}</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                bill?.workRegisters.map(wr => {
                  const hourType = hourTypes.find(h => h.id == wr.hourTypeId)
                  return (
                    <TableRow key={wr.id}>
                      <TableCell>{hourType?.description}</TableCell>
                      <TableCell>{format(wr.createdAt, 'DD-MM-YYYY')}</TableCell>
                      <TableCell>{Number(wr.hourNumber)}</TableCell>
                      <TableCell>{Number(hourType?.price)}</TableCell>
                    </TableRow>
                  )
                })
              }
              <TableRow className="font-bold">
                <TableCell className="text-end" colSpan={2} >TOTAL</TableCell>
                <TableCell>{bill?.workRegisters.reduce((sum, current) => sum + Number(current.hourNumber), 0)}</TableCell>
                <TableCell>{bill?.workRegisters.reduce((sum, current) => sum + Number(hourTypes.find(hour => hour.id == current.hourTypeId)?.price), 0)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableRow>
      </section>
    </main>
  )
}