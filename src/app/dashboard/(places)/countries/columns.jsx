"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";

import { MoreHorizontal } from "lucide-react";
import Edite from "./Edite";

const deleteItem = async (id) => {
  try {
    const response = await axios.delete(
      `https://offers.pythonanywhere.com/v1/api/places/country/${id}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
 
 
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
    accessorKey: "name_ar",
    cell: ({ row }) => {
      const name_ar = row.getValue("name_ar");
      return <div className="text-right text-xl font-bold w-[36rem]">{name_ar}</div>;
    },
  },
];
