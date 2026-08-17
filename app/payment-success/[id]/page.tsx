import { getSinglePayment } from "@/app/(dashboardGroup)/_action/payment";

const PaymentSuccess = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log(id);

  const paymentData = await getSinglePayment(id);
  console.log(paymentData);

  return (
    <div>
      <h1>Payment Success: {id}</h1>
    </div>
  );
};

export default PaymentSuccess;
