"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createRentalRequest } from "../_action/rentalRequest";

export default function RentalRequestButton({
  propertyId,
}: {
  propertyId: string;
}) {
  const handleRequest = async () => {
    const result = await createRentalRequest(propertyId);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.messsage);
    }
  };

  return (
    <Button
      onClick={handleRequest}
      className="cursor-pointer mt-8 h-12 w-full bg-green-600 hover:bg-green-700"
    >
      Rental Request
    </Button>
  );
}
