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
    accessorKey: "type",
    cell: ({ row }) => {
      const type = row.getValue("type");
      return (
        <div className="text-right font-bold ">
          <div className="text-end text-sm text-[#91929E]">نوع العملة</div>

          <div className="type_cusomer text-right text-sm font-bold text-[#0AC947]">
            {type}
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
    accessorKey: "number_users",
    cell: ({ row }) => {
      const number_users = row.getValue("number_users");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">عدد الاستخدام</div>
          <div className="number_users_cusomer text-right text-sm font-bold">
            {number_users}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    cell: ({ row }) => {
      const price = row.getValue("price");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">قيمة الكوبون</div>
          <div className="price_cusomer text-right text-sm font-bold">
            {price}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    cell: ({ row }) => {
      const date = row.getValue("date");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">تاريخ انتهاء الكوبون</div>
          <div className="date_cusomer text-sm text-right  font-bold">
            {date}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    cell: ({ row }) => {
      const title = row.getValue("title");
      const email = row.getValue("email");
      return (
        <div>
          <div className="title_cusomer text-right text-[16px] font-bold">
            {title}
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
