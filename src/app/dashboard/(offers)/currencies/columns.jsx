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
    accessorKey: "cut_ar",

    cell: ({ row }) => {
      const id = row.getValue("cut_ar");

      return null;
    },
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      let statusTitle = "";
      switch (status) {
        case 1:
          statusTitle = "قيد الانشاء";
          break;
        case 2:
          statusTitle = "تم الانشاء";
          break;
        case 3:
          statusTitle = "تم التوقف";
          break;
      }
      return (
        <div className="text-right font-bold ">
          <h1 className="text-sm text-[#91929E]">حالة القسم</h1>
          <h1 className="text-[#0AC947] text-sm">{statusTitle}</h1>
        </div>
      );
    },
  },
  {
    accessorKey: "name_ar",
    cell: ({ row }) => {
      const name_ar = row.getValue("name_ar");
      return <div className="text-right text-2xl font-bold">{name_ar}</div>;
    },
  },
  {
    accessorKey: "icon",
    cell: ({ row }) => {
      const icon = row.getValue("icon");
      return (
        <div className="flex justify-end">
          <Image
            src={row.getValue("icon")}
            className="rounded-full w-[60px] h-[60px]"
            alt="sadasdsad"
            width={50}
            height={50}
          />
        </div>
      );
    },
  },
];
