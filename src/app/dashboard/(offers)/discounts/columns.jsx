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
    accessorKey: "price_after",
    cell: ({ row }) => {
      const price_after = row.getValue("price_after");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">السعر بعد</div>
          <div className="pre_price_cusomer text-right text-sm font-bold">
            {price_after}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "price_before",
    cell: ({ row }) => {
      const price_before = row.getValue("price_before");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">السعر قبل</div>
          <div className="post_price_cusomer text-right text-sm font-bold">
            {price_before}
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
          <div className="text-end text-sm text-[#91929E]">تاريخ انتهاء العرض</div>
          <div className="date_cusomer text-sm text-right  font-bold">
            {duration}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "name_ar",
    cell: ({ row }) => {
      const name_ar = row.getValue("name_ar");
   
      return (
        <div>
          <div className="title_cusomer text-right text-[16px] font-bold">
            {name_ar}
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
