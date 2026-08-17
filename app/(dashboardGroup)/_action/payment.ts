"use server";

import { cookies } from "next/headers";

export const paymentProperty = async (rentalRequestId: string) => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/create`,
    {
      method: "POST",
      headers: {
        Authorization: token!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rentalRequestId,
      }),
    },
  );

  const result = await res.json();

  return result;
};

export const getSinglePayment = async (id: string) => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/payments/${id}`, {
    method: "GET",
    headers: {
      Authorization: token!,
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();

  return result;
};

export const getAllPaymentHistory = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/payments`, {
    method: "GET",
    headers: {
      Authorization: token!,
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();

  return result;
};

export const LandlordTotalEarning = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/earnings`,
    {
      method: "GET",
      headers: {
        Authorization: token!,
        "Content-Type": "application/json",
      },
    },
  );

  const result = await res.json();

  return result;
};
