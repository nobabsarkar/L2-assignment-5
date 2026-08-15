"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const landlordDeleteProperties = async (id: string) => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/properties/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token!,
        "Content-Type": "application/json",
      },
    },
  );

  const result = await res.json();

  revalidatePath("/landlord-dashboard/my-property");

  return result;
};
