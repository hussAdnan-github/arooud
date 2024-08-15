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
import Edite from "./Edite";

// const [email , setEmail] = useState();

// const email = '';
export const columns = [
  {
    accessorKey: "id",

    cell: ({ row }) => {
      const payment = row.original;

      const id = row.getValue("id");

      return <Edite dataRow={row} />;
    },
  },
  {
    accessorKey: "currency_type",
    cell: ({ row }) => {
      const currency_type = row.getValue("currency_type");
      return (
        <div className="text-right font-bold ">
          <div className="text-end text-sm text-[#91929E]">نوع العملة</div>

          <div className="type_cusomer text-right text-sm font-bold text-[#0AC947]">
            {currency_type}
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
    accessorKey: "use",
    cell: ({ row }) => {
      const use = row.getValue("use");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">عدد الاستخدام</div>
          <div className="number_users_cusomer text-right text-sm font-bold">
            {use}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "coupon_value",
    cell: ({ row }) => {
      const coupon_value = row.getValue("coupon_value");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">قيمة الكوبون</div>
          <div className="price_cusomer text-right text-sm font-bold">
            {coupon_value}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "duration",
    cell: ({ row }) => {
      const duration = row.getValue("duration");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">تاريخ انتهاء الكوبون</div>
          <div className="date_cusomer text-sm text-right  font-bold">
            {duration}
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
    accessorKey: "image_ar",
    cell: ({ row }) => {
      const image_ar = row.getValue("image_ar");
      return (
        <div className="flex justify-end">
          <Image
            src={row.getValue("image_ar")}
            alt="sadasdsad"
            width={50}
            height={50}
          />
        </div>
      );
    },
  },
];
