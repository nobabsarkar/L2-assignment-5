/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from "jsonwebtoken";

const verifyToken = (token: string, secret: string) => {
  try {
    const verifyToken = jwt.verify(token, secret);
    return {
      success: true,
      data: verifyToken,
    };
  } catch (error: any) {
    console.log("Token varification failed:", error);
    return {
      success: false,
      message: error.message,
    };
  }
};

export const jwtUtils = {
  verifyToken,
};
