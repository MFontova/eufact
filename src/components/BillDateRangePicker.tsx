"use client"

import { DateRange, DateRangePicker } from "./tremor/DatePicker"
import { Label } from "./tremor/Label"

export default function BillDateRangePicker() {

  function onChangeHandler(dateRange: DateRange | undefined) {
    console.log(dateRange)
  }
  return (
    <div>
      <Label>Seleccionar el rang de dates a facturar</Label>
      <DateRangePicker onChange={onChangeHandler} />
    </div>
  )
}