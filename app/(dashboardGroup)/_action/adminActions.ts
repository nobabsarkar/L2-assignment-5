"use server";

import { cookies } from "next/headers";

export const adminGetAllUsers = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/users`, {
    method: "GET",
    headers: {
      Authorization: token!,
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();

  return result;
};
