import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
 
import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
 
import Delete from "./Delete";
export default function Edite({ dataRow }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      name: dataRow.getValue("name_ar"),
      status: dataRow.getValue("status"),
    },
  });
  const createPost = async (data) => {
    try {
      const response = await axios.put(
        `https://offers.pythonanywhere.com/v1/api/places/country/${dataRow.getValue(
          "id"
        )}/`,
        {
          name_ar: data.name,
          name_en: data.name,
          status: data.status,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  };
  const onSubmit = async (data) => {
    createPost(data);
  };
  return (
    <div>
      <Dialog className="gap-0">
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 bg-[#F4F9FD] rounded-full rotate-90  "
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>تعديل دولة</DialogTitle>
          </DialogHeader>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full text-end mt-8 mb-4"
          >
            <div className="mb-4">
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                اسم الدولة
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
                placeholder="اسم الدولة"
                {...register("name")}
              />
            </div>
            <div className="mt-6">
              <label
                for="first_name"
                className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
              >
                حالة الدولة
              </label>

              <select
                className="w-full border cursor-pointer border-[#b9b5b5a1] text-gray-500 bg-white rounded-md  h-11 text-sm"
                style={{ direction: "rtl" }}
                {...register("status")}
              >
                <option value="1">قيد الانشاء</option>
                <option value="2">تم الانشاء</option>
                <option value="3">تم التوقف</option>
              </select>
            </div>

            <div className="flex justify-end  space-x-4 mt-8">
              <div className="bg-[#D3D3D3] cursor-pointer hover:bg-[#D3D3D3] flex justify-center items-center w-16 text-white rounded-xl">
                <Delete id={dataRow.getValue("id")} />
              </div>
              <Button
                type="submit"
                className="bg-primaryColo hover:bg-primaryColo text-white rounded-xl"
              >
                تعديل
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
