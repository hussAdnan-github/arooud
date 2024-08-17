import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaCircleChevronLeft } from "react-icons/fa6";

export default function AddSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {},
  });
  const createPost = async (data) => {
    const formData = new FormData();
    formData.append("name_ar", data.sectionName);
    formData.append("name_en", data.sectionName);
    formData.append("status", data.status);
    formData.append("image", data.image[0]);
    try {
      await axios
        .post(
          "https://offers.pythonanywhere.com/v1/api/departments/departments/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  };
  const onSubmit = async (data) => {
    createPost(data);
  };
  return (
    <DialogContent className="sm:max-w-[425px] bg-white">
      <DialogHeader>
        <DialogTitle>أضافة قـسم</DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full text-end mt-8">
        <div className="mb-4">
          <label
            // for="first_name"
            className="block mb-2 text-sm font-medium text-gray-500 "
          >
            اسم القسم
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-end"
            placeholder="حسيننن"
            {...register("sectionName", {
              required: "يجب أضافة أسم القسم",
            })}
          />
          <p className="text-primaryColo">{errors.sectionName?.message}</p>
        </div>
        <div className="mt-6">
          <label
            // for="first_name"
            className="block mb-4 text-sm font-medium text-gray-500 "
          >
            حالة القسم
          </label>
          <select
            {...register("status", {
              required: "يجب أضافة أسم القسم",
            })}
            className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
            style={{ direction: "rtl" }}
          >
            <option value="1">قيد الانشاء</option>
            <option value="2">تم الانشاء</option>
            <option value="3">تم التوقف</option>
          </select>
          <p className="text-primaryColo">{errors.status?.message}</p>
        </div>
        <div className="mt-6">
          <label
            // for="first_name"
            className="block mb-4 text-sm font-medium text-gray-500 "
          >
            صورة{" "}
          </label>

          <label
            className="block mb-2 text-sm font-medium update_img text-gray-500 "
            htmlFor="file_section"
          >
            {" "}
            <FaCircleChevronLeft className="text-gray-400 text-xl" />
            إضافة صورة القسم{" "}
          </label>
          <input
            className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none   "
            id="file_section"
            {...register("image", {
              required: "يجب أضافة صورة القسم",
            })}
            type="file"
          />
          <p className="text-primaryColo">{errors.image?.message}</p>
        </div>
        <div className="felx flex-row space-x-4 mt-8">
          <Button
            type="submit"
            className="bg-[#D3D3D3] hover:bg-[#D3D3D3] text-white rounded-2xl"
          >
            حفظ مع إضافة أخرى
          </Button>
          <Button
            type="submit"
            className="bg-primaryColo px-8 py-2 hover:bg-primaryColo text-white rounded-2xl"
          >
            إضافة
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}
