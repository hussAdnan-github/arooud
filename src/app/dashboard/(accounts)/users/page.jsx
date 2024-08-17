async function getData() {
  console.log(img);
  return [
    {
      id: 1,
      name: "احمد الكاف",
      email: "evanyates@gmail.com",
      phone: "+966507666777",
      type: "عميل",
      location: "المكلا",
      state: "نشط",
      image: img,
    },

    {
      id: 1,
      name: "احمد الكاف",
      email: "evanyates@gmail.com",
      phone: "+966507666777",
      type: "عميل",
      location: "المكلا",
      state: "نشط",
      image: img,
    },

    {
      id: 1,
      name: "احمد الكاف",
      email: "evanyates@gmail.com",
      phone: "+966507666777",
      type: "عميل",
      location: "المكلا",
      state: "نشط",
      image: img,
    },

    {
      id: 1,
      name: "احمد الكاف",
      email: "evanyates@gmail.com",
      phone: "+966507666777",
      type: "عميل",
      location: "المكلا",
      state: "نشط",
      image: img,
    },

    {
      id: 1,
      name: "احمد الكاف",
      email: "evanyates@gmail.com",
      phone: "+966507666777",
      type: "عميل",
      location: "المكلا",
      state: "نشط",
      image: img,
    },

    {
      id: 1,
      name: "احمد الكاف",
      email: "evanyates@gmail.com",
      phone: "+966507666777",
      type: "عميل",
      location: "المكلا",
      state: "نشط",
      image: img,
    },

    // ...
  ];
}

import img from "../../../../../public/dashboard/person.svg";
import { DataTable } from "@/app/dashboard/(accounts)/users/data-table";
import { columns } from "./columns";
export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

 