async function getData() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/accounts/markets/",
    {
      cache: "no-store",
    }
  );
  const section = await response.json();

  return section["result"];
}
async function getSection() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/departments/departments/",
    {
      cache: "no-store",
    }
  );
  const section = await response.json();

  return section["result"];
}
async function getCountry() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/country/",
    {
      cache: "no-store",
    }
  );
  const section = await response.json();

  return section["result"];
}

import { DataTable } from "@/app/dashboard/(accounts)/shops/data-table";
import { columns } from "./columns";
export default async function Page() {
  const data = await getData();
  const section = await getSection();
  const country = await getCountry();

  return (
    <div className="container mx-auto">
      <DataTable
        columns={columns}
        data={data}
        section={section}
        country={country}
      />
    </div>
  );
}
