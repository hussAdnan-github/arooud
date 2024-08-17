"use client";

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
          <h1 className="text-green-600 text-sm">{statusTitle}</h1>
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
    accessorKey: "image",
    cell: ({ row }) => {
      const image = row.getValue("image");
      return (
        <div className="flex justify-end">
          <Image
          className="rounded-full w-[60px] h-[60px]"
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
