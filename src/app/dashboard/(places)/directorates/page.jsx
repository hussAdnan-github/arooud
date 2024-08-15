 
async function getData() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/directorate/" ,{
      cache:'no-store'
    }
  );
  const directorate = await response.json();
  return directorate['result']
}

async function getGovernorates() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/provinec/",
    {
      cache: "no-store",
    }
  );
  const provinec = await response.json();

  return provinec["result"];
}
import { DataTable } from "@/app/dashboard/(places)/directorates/data-table";
import { columns } from "./columns";
 export default async function Page() {
  const data = await getData();
  const governorates = await getGovernorates();
  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} governorates={governorates}/>
    </div>
  );
}

 