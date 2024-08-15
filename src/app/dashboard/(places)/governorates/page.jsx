 

async function getData() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/provinec/",
    {
      cache: "no-store",
    }
  );
  const provinec = await response.json();

  return provinec["result"];
}
async function getDatacountry() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/country/",
    {
      cache: "no-store",
    }
  );
  const country = await response.json();
  return country["result"];
}

import { DataTable } from "@/app/dashboard/(places)/governorates/data-table";
import { columns } from "./columns";
export default async function Page() {
  const data = await getData();
  const country = await getDatacountry();
console.log(country)
  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} country={country} />
    </div>
  );
}

