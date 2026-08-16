"use client";

import { Button } from "@/components/ui/button";
import { paymentProperty } from "../_action/payment";
import { toast } from "sonner";

type PaymentButtonProps = {
  rentalRequestId: string;
};

const PaymentButton = ({ rentalRequestId }: PaymentButtonProps) => {
  //

  const handlePayment = async () => {
    const result = await paymentProperty(rentalRequestId);
    if (result?.success) {
      window.location.href = result.data;
      // toast.success("Payment Successfully");
    }

    console.log(result);
  };

  return (
    <Button onClick={handlePayment} className="cursor-pointer w-full" size="sm">
      Pay Now
    </Button>
  );
};

export default PaymentButton;
