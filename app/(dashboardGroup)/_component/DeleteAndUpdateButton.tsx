/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Edit, Trash2 } from "lucide-react";
import { landlordDeleteProperties } from "../_action/landlordDeleteProperties";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DeleteAndUpdateButton = ({ property }: any) => {
  const router = useRouter();

  const handleDelete = async () => {
    const result = await landlordDeleteProperties(property.id);
    if (result?.success) {
      toast.success("Deleted Successfully");
    }
  };

  const handleUpdate = async () => {
    router.push(`/landlord-dashboard/my-properties/${property.id}`);
  };

  return (
    <>
      {/* <AlertDialog>
        <AlertDialogTrigger
          render={<Button variant="outline">Show Dialog</Button>}
        />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="mt-5 flex gap-3">
        <button className="flex cursor-pointer flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          <Edit size={16} />
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="flex cursor-pointer flex-1 items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-100"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div> */}

      <div className="mt-5 grid grid-cols-2 gap-3">
        {/* Edit */}
        <Button
          onClick={handleUpdate}
          type="button"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Edit size={16} />
          Edit
        </Button>

        {/* Delete */}
        <AlertDialog>
          {/* <AlertDialogTrigger>
            <Button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
            >
              <Trash2 size={16} />
              Delete
            </Button>
          </AlertDialogTrigger> */}
          <AlertDialogTrigger
            render={
              <Button
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                variant="outline"
              >
                {" "}
                <Trash2 size={16} />
                Delete
              </Button>
            }
          />

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete?
              </AlertDialogTitle>

              <AlertDialogDescription>
                Warning: Are you sure you want to delete{" "}
                <span className="font-semibold text-red-600">
                  {property.title}
                </span>
                ? This property will be permanently removed.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer">
                Cancel
              </AlertDialogCancel>

              <AlertDialogAction
                onClick={handleDelete}
                className="cursor-pointer bg-red-600 hover:bg-red-700"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default DeleteAndUpdateButton;
