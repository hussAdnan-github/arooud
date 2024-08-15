"use client";

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
    accessorKey: "provinec",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "name_ar",
    cell: ({ row }) => {
      const name_ar = row.getValue("name_ar");
      const provinec = row.getValue("provinec");
      return (
        <div className="text-right text-xl font-bold">
          {provinec} - {name_ar}
        </div>
      );
    },
  },
];
