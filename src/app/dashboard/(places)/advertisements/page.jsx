async function getData() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/advertising/",
    {
      cache: "no-store",
    }
  );
  const advertisements = await response.json();

  return advertisements;
}
 
 
import { DataTable } from "@/app/dashboard/(places)/advertisements/data-table";
import { Payment, columns } from "./columns";
export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
