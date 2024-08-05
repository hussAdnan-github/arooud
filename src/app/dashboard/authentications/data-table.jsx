"use client";
import { Button } from "@/components/ui/button";
import { IoSearchSharp } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaArrowRightLong, FaCircleChevronLeft } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import Dropdown from "../_components/Dropdown";
import ButtonBack from "../_components/ButtonBack";

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
            value={table.getColumn("name")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-md text-end rounded-full pe-10 drop-shadow-sm bg-white border-0"
          />
          <IoSearchSharp className="absolute me-2 text-2xl" />
        </div>
      </div>
      <div className="w-[870px]">
        <div className="flex justify-between items-center">
          <div>
            <Dialog className="gap-0">
              <DialogTrigger asChild>
                <Button className="bg-primaryColo rounded-xl shadow-md shadow-red-300 hover:bg-primaryColo text-white w-44">
                  {" "}
                  <FaPlus className="me-2" />
                  إضافة المجموعات
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] overflow-scroll bg-white">
                <DialogHeader>
                  <DialogTitle>إضافة المجموعات</DialogTitle>
                </DialogHeader>

                <form className="w-full text-end mt-8 mb-4">
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      اسم المجموعة
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
                      placeholder="ادخل اسم المجموعة"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-sm text-[#9796A1] underline cursor-pointer">
                      تحديد الكل
                    </h1>
                    <h1 className="text-[16px]">الصلاحيات</h1>
                  </div>
                  <div className="auth mt-4">
                    <h1 className="text-sm text-[#9796A1] mb-4">
                      صلاحيات المستخدم
                    </h1>
                    <div className="auth_check flex justify-between">
                      <div className="auth_show flex">
                        <label htmlFor="" className="text-sm font-medium me-2">
                          عرض{" "}
                        </label>

                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="accent-primaryColo mt-0 me-2 w-5 h-5 t ext-blue-600 bg-gray-100 border-gray-300 rounded "
                        />
                      </div>

                      <div className="auth_show flex">
                        <label htmlFor="" className="text-sm font-medium me-2">
                          حذف{" "}
                        </label>

                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="accent-primaryColo mt-0 me-2 w-5 h-5 t ext-blue-600 bg-gray-100 border-gray-300 rounded "
                        />
                      </div>

                      <div className="auth_show flex">
                        <label htmlFor="" className="text-sm font-medium me-2">
                          تعديل{" "}
                        </label>

                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="accent-primaryColo mt-0 me-2 w-5 h-5 t ext-blue-600 bg-gray-100 border-gray-300 rounded "
                        />
                      </div>

                      <div className="auth_show flex">
                        <label htmlFor="" className="text-sm font-medium me-2">
                          اضافة{" "}
                        </label>

                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="accent-primaryColo mt-0 me-2 w-5 h-5 t ext-blue-600 bg-gray-100 border-gray-300 rounded "
                        />
                      </div>
                    </div>
                  </div>
                </form>

                <DialogFooter>
                  <Button
                    type="submit"
                    className="bg-[#D3D3D3] hover:bg-[#D3D3D3] text-white rounded-xl"
                  >
                    أضافة مع أضافة أخرى
                  </Button>
                  <Button
                    type="submit"
                    className="bg-primaryColo hover:bg-primaryColo text-white rounded-xl"
                  >
                    أضافة
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <div className="text-end my-2">
              <ButtonBack />

              <h1 className="text-3xl font-bold my-4">(1215) المجموعات</h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full flex-col gap-2 ">
            {/* <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                 </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader> */}
            {/* <TableBody className="bg-blue-700 rounded-full"> */}
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <div
                  className="w-full flex justify-between h-9  drop-shadow-sm bg-white rounded-lg items-center p-2"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <div key={cell.id} className="">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
            {/* </TableBody> */}
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div> */}

      <div className="inline-flex items-start gap-4 bg-white px-3 py-2 rounded-lg drop-shadow-md">
        <div>
          <button
            className="me-4 text-primaryColo "
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <FaArrowLeft />
          </button>
          <button
            className="text-primaryColo "
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
            {" 28"}
          </h1>
        </div>
      </div>
    </div>
  );
}
