"use server";

import { cookies } from "next/headers";

type CreateReviewPayload = {
  paymentId: string;
  rating: number;
  comment: string;
};

export const createReview = async (payload: CreateReviewPayload) => {
  const token = (await cookies()).get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/reviews`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  console.log(result);

  return result;
};
