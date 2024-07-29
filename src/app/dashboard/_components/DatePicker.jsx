"use client"
 
import * as React from "react"
import { format } from "date-fns"
import { ar } from 'date-fns/locale';

import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
export default function DatePicker() {
  const [date, setDate] = useState()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-left font-normal   border-[#DADADA] ",
            !date && "text-muted-foreground text-[#7D8592] hover:text-[#7D8592]"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP" ,  { locale: ar }) : <span>حدد التاريخ</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={ar}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}