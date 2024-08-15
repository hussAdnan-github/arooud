async function getData() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/offers/currency/",
    {
      cache: "no-store",
    }
  );
  const section = await response.json();

  return section["result"];
}

// async function page() {
//   // Fetch data from your API here.

//   return <></>
// }
// import img from '../../../../../public/dashboard/person.svg'
import { DataTable } from "@/app/dashboard/(offers)/currencies/data-table";
import { Payment, columns } from "./columns";
export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
