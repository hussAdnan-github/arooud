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
    accessorKey: "state",
    cell: ({ row }) => {
      const state = row.getValue("state");
      return (
        <div className="text-right font-bold ">
          <div className="text-end text-sm text-[#91929E]">حالة المستخدم</div>

          <div className="state_cusomer text-right text-sm font-bold">
            {state}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "location",
    cell: ({ row }) => {
      const location = row.getValue("location");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">موقع المستخدم</div>
          <div className="location_cusomer text-right text-sm font-bold">
            {location}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    cell: ({ row }) => {
      const type = row.getValue("type");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">نوع المستخدم</div>
          <div className="type_cusomer text-right text-sm font-bold">
            {type}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    cell: ({ row }) => {
      const phone = row.getValue("phone");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">رقم الهاتف</div>
          <div className="name_cusomer text-sm text-right  font-bold">
            {phone}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    cell: ({ row }) => {
      const name = row.getValue("name");
      const email = row.getValue("email");
      return (
        <div>
          <div className="name_cusomer text-right text-[16px] font-bold">
            {name}
          </div>
          <div className="email_cusomer text-right text-sm font-bold">
            {email}
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "image",
    cell: ({ row }) => {
      const image = row.getValue("image");
      return (
        <div className="flex justify-end">
          <Image
            src={row.getValue("image")}
            alt="sadasdsad"
            width={50}
            height={50}
          />
        </div>
      );
    },
  },
];
