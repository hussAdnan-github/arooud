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
    accessorKey: "departments",
    cell: ({ row }) => {
      const departments = row.getValue("departments");
      return (
        <div className="text-right font-bold ">
          <div className="text-end text-sm text-[#91929E]">مجال المحل</div>

          <div className="departments text-right text-sm font-bold">
            {departments}
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
    accessorKey: "directorate",
    cell: ({ row }) => {
      const directorate = row.getValue("directorate");

      return (
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">المدينة</div>
          <div className="directorate text-right text-sm font-bold">
            {directorate}
          </div>
        </div>
      );
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
        <div className="text-end">
          <div className="text-end text-sm text-[#91929E]">حالة الموقع</div>
          <div className="status_cusomer text-right text-sm font-bold">
            {statusTitle}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "whatsapp",  
    cell: ({ row }) => {
      const whatsapp = row.getValue("whatsapp");

      return (
        <div className="text-end pohne">
          <div className="text-end text-sm text-[#91929E]">رقم الهاتف</div>
          <div className="name_cusomer text-sm text-right  font-bold">
            {whatsapp}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "name_ar",
    cell: ({ row }) => {
      const name_ar = row.getValue("name_ar");
      const email = row.getValue("email");
      return (
        <div>
          <div className="name_cusomer text-right text-[16px] font-bold">
            {name_ar}
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
