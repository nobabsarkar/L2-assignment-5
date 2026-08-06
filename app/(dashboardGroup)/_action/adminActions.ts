"use server";

import { revalidatePath } from "next/cache";
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

export const changeUserStatus = async (id: string, status: string) => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/users/${id}`,
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

  revalidatePath("/admin-dashboard/manage-users");

  return result;
};

export const getAllProperties = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/properties`,
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

export const getAllRentals = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/rentals`, {
    method: "GET",
    headers: {
      Authorization: token!,
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();

  return result;
};
