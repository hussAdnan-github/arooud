async function getData() {
  console.log(img);
  return [
    {
      id: 1,
      state: "قيد الأنشاء",
      title: "اعلان رمضان بشركة دن",
      image: img,
    },

    {
      id: 1,
      state: "قيد الأنشاء",
      title: "اعلان رمضان بشركة دن",
      image: img,
    },

    {
      id: 1,
      state: "قيد الأنشاء",
      title: "اعلان رمضان بشركة دن",
      image: img,
    },

    // ...
  ];
}

// async function page() {
//   // Fetch data from your API here.

//   return <></>
// }
import img from "../../../../../public/dashboard/person.svg";
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