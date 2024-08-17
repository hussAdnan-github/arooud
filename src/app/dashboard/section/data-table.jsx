"use client";
import { Button } from "@/components/ui/button";
import { GoBell } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useState } from "react";
import Dropdown from "../_components/Dropdown";
import ButtonBack from "../_components/ButtonBack";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
import AddSection from "../_components/AddSection";

export function DataTable({ columns, data }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center  gap-6">
          <Dropdown />
          <GoBell className="text-black rounded-lg p-2 text-4xl  bg-white drop-shadow-sm" />
        </div>
        <div className="flex items-center justify-end py-4 relative flex-auto">
          <Input
            placeholder="بحـث"
            value={table.getColumn("name_ar")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("name_ar")?.setFilterValue(event.target.value)
            }
            className="max-w-md text-end rounded-full pe-10 drop-shadow-sm bg-white border-0"
          />
          <IoSearchSharp className="absolute me-2 text-2xl" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <Dialog className="gap-0">
            <DialogTrigger asChild>
              <Button className="bg-primaryColo shadow-md shadow-red-300 hover:bg-primaryColo text-white ">
                {" "}
                <FaPlus className="me-2" />
                أضافة قـسم
              </Button>
            </DialogTrigger>
            <AddSection />
          </Dialog>
        </div>
        <div>
          <div className="text-end my-2">
            <ButtonBack />

            <h1 className="text-3xl font-bold my-4">
              <span>({data.length})</span> الأقســام
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex w-full flex-col gap-2 ">
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <div
                className="w-full flex justify-between h-[91px]  bg-white rounded-lg items-center p-2"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <div key={cell.id} className="">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div>
              <div colSpan={columns.length} className="h-24 text-center">
                ليس هناك مدخلات
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="inline-flex items-start gap-4 bg-white px-3 py-2 rounded-lg drop-shadow-md absolute -bottom-80">
        <div>
          <button
            className="me-4 text-primaryColo cursor-pointer"
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <FaArrowLeft />
          </button>
          <button
            className="text-primaryColo cursor-pointer"
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <h1 className="text-black text-sm font-bold">
            {table.getState().pagination.pageIndex + 1} {" - "}{" "}
            {table.getPageCount()} {"of"}
            {table.getRowModel().rows.length}
          </h1>
        </div>
      </div>
    </div>
  );
}
