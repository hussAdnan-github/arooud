async function getData() {
  return [
    {
      id: 1,
      name: "موقع نون",
      email: "evanyates@gmail.com",
      phone: "+966507666777",
      type: "الاكترونيات",
      location: "المكلا",
      state: "نشط",
      //  image: img,
    },

    // ...
  ];
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
