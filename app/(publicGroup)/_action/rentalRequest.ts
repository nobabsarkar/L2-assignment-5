"use server";

import { cookies } from "next/headers";

export const createRentalRequest = async (propertyId: string) => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
    method: "POST",
    headers: {
      Authorization: token!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ propertyId }),
  });

  const result = await res.json();

  return result;
};
