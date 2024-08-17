async function getData() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/offers/coupons/",
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
async function getCurrency() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/offers/currency/",
    {
      cache: "no-store",
    }
  );
  const section = await response.json();

  return section["result"];
}
import { DataTable } from "@/app/dashboard/(offers)/coupons/data-table";
import { columns } from "./columns";
export default async function Page() {
  const data = await getData();
  const website = await getWebsite();
  const shope = await getShope();
  const currency = await getCurrency();
  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data}  website={website} shope={shope} currency={currency}/>
    </div>
  );
}
