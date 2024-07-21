// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
//   import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"
//   import { Button } from "@/components/ui/button"
// import { FaPlus } from "react-icons/fa"
// import { FaCircleChevronLeft } from "react-icons/fa6"


async function getData(){
    console.log(img)
    return [
 
        {
        id: 1,
        title: "صلاحيات احمد",
        },
        
     
        
 
  
      ]
  }

import img from '../../../../public/dashboard/person.svg'
import { DataTable } from "@/app/dashboard/authentications/data-table"
import { columns } from "./columns"
export default async function Page() {
    const data = await getData()
  
    return (
      <div className="container mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    )
  }
  
    // Dialog
//     <div>
//               <Dialog className='gap-0'>
//       <DialogTrigger asChild>
//       <Button className='bg-primaryColo text-white w-36'> <FaPlus className="me-2"/>أضافة قـسم
//       </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[580px] bg-white">
//         <DialogHeader>
//           <DialogTitle>أضافة محل تجاري</DialogTitle>
          
//         </DialogHeader>
  
           
//           <form className="w-full text-end mt-8">
//   <div className="mb-4">
//     <label for="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">أسـم المحل التجاري</label>
//     <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder="حسيننن" required />
// </div>
// <div className="mb-4">
//           <label for="message" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">نبذة عن المحل التجاري</label>
//           <textarea id="message" rows="4" className="text-end resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="سيؤؤؤؤن" required></textarea>
// </div>
// <div className="mt-6">
// <label for="first_name" className="block mb-4 text-sm font-medium text-gray-500 dark:text-white">شعار المحل </label>

// <label className="block mb-2 text-sm font-medium update_img text-gray-500 dark:text-white" for="file_input"> <FaCircleChevronLeft    className="text-gray-400 text-xl"/>إضافة صورة شعار المتجر

// </label>
// <input className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

// </div>
// <div className="mb-4">
//     <label for="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">مجالات المحل التجاري</label>
//    <div className="grid grid-cols-4 gap-4">
//    <div className="border border-gray-500 text-center rounded-lg px-1 py-1">
//     <h1>الكتروتيات</h1>    
//     </div>
//    <div className="border border-gray-500 text-center rounded-lg px-1 py-1">
//     <h1>الكتروتيات</h1>    
//     </div>
//    <div className="border border-gray-500 text-center rounded-lg px-1 py-1">
//     <h1>الكتروتيات</h1>    
//     </div>
//    <div className="border border-gray-500 text-center rounded-lg px-1 py-1">
//     <h1>الكتروتيات</h1>    
//     </div>
//    <div className="border border-gray-500 text-center rounded-lg px-1 py-1">
//     <h1>الكتروتيات</h1>    
//     </div>
//    <div className="border border-gray-500 text-center rounded-lg px-1 py-1">
//     <h1>الكتروتيات</h1>    
//     </div>
//     </div>  
// </div>
// {/* select */}
// {/* <div className="mt-6">
// <label for="first_name" className="block mb-4 text-sm font-medium text-gray-500 dark:text-white">حالة القسم</label>

// <Select>
//       <SelectTrigger className="w-full   border-gray-300 ">
//         <SelectValue placeholder="Select a fruit" />
//       </SelectTrigger>
//       <SelectContent className='bg-white '>
//         <SelectGroup>
//           <SelectLabel>قيد الأنشــاء</SelectLabel>
//           <SelectItem value="apple">انتظاار</SelectItem>
//           <SelectItem value="banana">منشــا</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>

// </div> */}



 
// </form>
        
 
        
//         <DialogFooter>
//           <Button type="submit" className='bg-[#D3D3D3] text-white rounded-xl'>أضافة مع أضافة أخرى</Button>
//           <Button type="submit" className='bg-primaryColo  text-white rounded-xl'>أضافة</Button>

//         </DialogFooter>
//       </DialogContent>
//     </Dialog>

//     </div>