 

async function getData() {
  
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/country/" ,{
      cache:'no-store'
    }
  );
  const country = await response.json();
  return country['result']
}

import { DataTable } from "@/app/dashboard/(places)/countries/data-table";
import { columns } from "./columns";
export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

