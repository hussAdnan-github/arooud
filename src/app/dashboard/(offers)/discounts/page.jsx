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
async function getWebsite() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/accounts/webs/",
    {
      cache: "no-store",
    }
  );
  const section = await response.json();

  return section["result"];
}
async function getShope() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/accounts/markets/",
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
  const section = await getSection();
  const website = await getWebsite();
  const shope = await getShope();
  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} section={section} website={website} shope={shope}/>
    </div>
  );
}
