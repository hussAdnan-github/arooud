"use client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,

  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
export default function Delete({ id }) {
  const createDelete = async () => {
    try {
      await axios
        .delete(
          `https://offers.pythonanywhere.com/v1/api/accounts/markets/${id}`
        )
        .then((response) => {
          console.log(response.data.message);
        });
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  };
  return (
    <AlertDialog className="gap-0">
      <AlertDialogTrigger asChild>
        <Button>حذف</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px] bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>حذف قـسم</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-[#D3D3D3] cursor-pointer hover:bg-[#D3D3D3] flex justify-center items-center w-16 text-white rounded-xl">
            الغاء{" "}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={createDelete}
            className="bg-[#D3D3D3] cursor-pointer hover:bg-[#D3D3D3] flex justify-center items-center w-16 text-white rounded-xl"
          >
            تأكيد
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
