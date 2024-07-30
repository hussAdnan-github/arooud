 "use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

 
import Image from "next/image"
import Edit from "../../_components/Edit"
export const columns  = [
  
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 bg-[#F4F9FD] rounded-full rotate-90"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white">
          <Edit />
        </DropdownMenuContent>
      </DropdownMenu>
      )
    },
  },

  {
    accessorKey: "title",
    cell: ({ row }) => {
      const title = row.getValue("title");
      return <div className="text-right text-xl font-bold">{title}</div>
    },
  },
 
]
