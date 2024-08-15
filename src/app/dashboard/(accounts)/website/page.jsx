async function getData() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/accounts/webs/",
    {
      cache: "no-store",
    }
  );
  const section = await response.json();

  return section["result"];
}

// import img from '../../../../../public/dashboard/person.svg'
import { DataTable } from "@/app/dashboard/(accounts)/website/data-table";
import { columns } from "./columns";
export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
