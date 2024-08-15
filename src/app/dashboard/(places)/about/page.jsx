async function getData() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/arewe/",
    {
      cache: "no-store",
    }
  );
  const about = await response.json();
  return about;
}

import { DataTable } from "@/app/dashboard/(places)/about/data-table";
import { columns } from "./columns";
export default async function Page() {
  const data = await getData();
   return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
