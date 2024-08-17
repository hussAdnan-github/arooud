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
    accessorKey: "state",
    cell: ({ row }) => {
      const state = row.getValue("state");
      return (
        <div className="text-right font-bold ">
          <div className="text-end text-sm text-[#91929E]">حالة المستخدم</div>

          <div className="state_cusomer text-green-500 text-right text-sm font-bold">
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
