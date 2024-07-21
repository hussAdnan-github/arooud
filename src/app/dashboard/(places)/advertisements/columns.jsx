 "use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import Image from "next/image"
export const columns  = [
  
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 bg-[#F4F9FD] rounded-full rotate-90">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    accessorKey: "state",
    cell: ({ row }) => {
      const state = row.getValue("state");
      return <div className="text-right font-bold ">
        <h1 className="text-sm text-[#91929E]">حالة القسم</h1>
       <h1 className="text-green-600 text-sm">{state}</h1>
        
        </div>
    },
  },
  {
    accessorKey: "title",
    cell: ({ row }) => {
      const title = row.getValue("title");
      return <div className="text-right text-2xl font-bold">{title}</div>
    },
  },
  {
    accessorKey: "image" ,
    cell: ({ row }) => {
      const image = row.getValue("image")        
      return <div className="flex justify-end">
         <Image src={row.getValue("image")} alt="sadasdsad" width={50} height={50}/> 
      </div>
   
    },
  },
 
]
