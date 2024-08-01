 
async function getData() {
  return [
    {
      id: 1,
      title: "Hamed",

      key: "21597c25ab38a2458e880398d3e2179bc5346362",

      date: "يوليو 7, 2024, 4:14 م",
    },

    // ...
  ];
}

import { DataTable } from "@/app/dashboard/symbols/data-table";
import { columns } from "./columns";
export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
 