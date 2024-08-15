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
    accessorKey: "country",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      return null;
    },
  },
  {
    accessorKey: "name_ar",
    cell: ({ row }) => {
      const name_ar = row.getValue("name_ar");
      const country = row.getValue("country");
      return (
        <div className="text-right text-xl font-bold">
          {" "}
          {country} - {name_ar}
        </div>
      );
    },
  },
];
