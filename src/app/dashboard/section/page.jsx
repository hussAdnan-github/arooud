async function getData() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/departments/departments/",
    {
      cache: "no-store",
    }
  );
  const section = await response.json();

  return section["result"];
}

import { DataTable } from "@/app/dashboard/section/data-table";
import { Payment, columns } from "./columns";
export default async function Page() {
  const data = await getData();
  return (
    <div className="container mx-auto h-[1300px]">
      <DataTable columns={columns} data={data} pageSize={5}/>
    </div>
  );
}
