"use server";

import { cookies } from "next/headers";

export const landlordGetAllProperties = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/properties`,
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
