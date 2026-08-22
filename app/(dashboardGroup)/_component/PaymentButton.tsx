"use client";

import { Button } from "@/components/ui/button";
import { paymentProperty } from "../_action/payment";

type PaymentButtonProps = {
  rentalRequestId: string;
};

const PaymentButton = ({ rentalRequestId }: PaymentButtonProps) => {
  //

  const handlePayment = async () => {
    const result = await paymentProperty(rentalRequestId);
    if (result?.success) {
      window.location.href = result.data;
    }
  };

  return (
    <>
      <Button
        onClick={handlePayment}
        className="cursor-pointer w-full"
        size="sm"
      >
        Pay Now
      </Button>
      {/* {status === "COMPLETED" ? (
        <Button className="w-full" size="sm" variant="outline" disabled>
          ✓ Paid
        </Button>
      ) : (
        <Button
          onClick={handlePayment}
          className="cursor-pointer w-full"
          size="sm"
        >
          Pay Now
        </Button>
      )} */}
    </>
  );
};

export default PaymentButton;
