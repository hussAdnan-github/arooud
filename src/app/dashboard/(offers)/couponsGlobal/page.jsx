


async function getData(){
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/offers/globalcoupon/",
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
  async function getWebsite() {
    const response = await fetch(
      "https://offers.pythonanywhere.com/v1/api/accounts/globalwebsite/",
      {
        cache: "no-store",
      }
    );
    const section = await response.json();
  
    return section["result"];
  }
import { DataTable } from "@/app/dashboard/(offers)/couponsGlobal/data-table"
import { columns } from "./columns"
export default async function Page() {
    const data = await getData()
    const website = await getWebsite();
    const currency = await getCurrency()
  
    return (
      <div className="container mx-auto">
        <DataTable columns={columns} data={data} currency={currency} website={website}/>
      </div>
    )
  }
