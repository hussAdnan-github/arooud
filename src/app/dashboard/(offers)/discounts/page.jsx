async function getData() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/offers/offers/",
    {
      cache: "no-store",
    }
  );
  const section = await response.json();

  return section["result"];
}


import { DataTable } from "@/app/dashboard/(offers)/discounts/data-table";
import { columns } from "./columns";
export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
