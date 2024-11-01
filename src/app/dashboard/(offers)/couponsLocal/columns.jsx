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
      return <div className="contents"></div>;
    },
  },
  {
    accessorKey: "description_ar",

    cell: ({ row }) => {
      return <div className="contents"></div>;
    },
  },
  {
    accessorKey: "terms_of_use_ar",

    cell: ({ row }) => {
      return <div className="contents"></div>;
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
      return <div className="contents"></div>;
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
          <div className="text-end text-sm text-[#91929E]">
            تاريخ انتهاء الكوبون
          </div>
          <div className="date_cusomer text-sm text-right  font-bold">
            {duration}
          </div>
        </div>
      );
    },
  },
  // {
  //   accessorKey: "title",
  //   cell: ({ row }) => {
  //     const title = row.getValue("title");
  //     const email = row.getValue("email");
  //     return (
  //       <div>
  //         <div className="title_cusomer text-right text-[16px] font-bold">
  //           {title}
  //         </div>
  //         <div className="email_cusomer text-right text-sm font-bold">
  //           {email}
  //         </div>
  //       </div>
  //     );
  //   },
  // },

  {
    accessorKey: "image_ar",
    cell: ({ row }) => {
      const image_ar = row.getValue("image_ar");
      return (
        <div className="flex justify-end">
          <Image
            className="rounded-full w-[60px] h-[60px]"
            src={image_ar}
            alt="sadasdsad"
            width={50}
            height={50}
          />
        </div>
      );
    },
  },
];
