"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// const [email , setEmail] = useState();

// const email = '';
export const columns = [
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

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
      );
    },
  },
  {
    accessorKey: "date",
    cell: ({ row }) => {
      const date = row.getValue("date");
      return (
        <div className="text-right font-bold ">
          <div className="text-end text-sm text-[#91929E]">تاريخ الانشاء</div>

          <div className="date_cusomer text-right text-sm font-bold ">
            {date}
          </div>
        </div>
      );
    },
  },
 
 
  {
    accessorKey: "key",
    cell: ({ row }) => {
      const key = row.getValue("key");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">المفتاح</div>
          <div className="key_cusomer text-sm text-right  font-bold">
            {key}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    cell: ({ row }) => {
      const title = row.getValue("title");
      return (
        <div>
          <div className="title_cusomer text-right text-[16px] font-bold">
          اسم المستخدم
          </div>
          <div className="email_cusomer text-[#7D8592] text-right text-xs font-normal">
            {title}
          </div>
        </div>
      );
    },
  },

  
];
