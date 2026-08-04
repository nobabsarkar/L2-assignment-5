"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const getRentalRequests = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/requests`,
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

export const landlordUpdateRentalRequestStatus = async (
  id: string,
  status: "APPROVED" | "REJECTED",
) => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/requests/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: token!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    },
  );

  const result = await res.json();

  revalidatePath("/landlord-dashboard/rental-requests");

  return result;
};
