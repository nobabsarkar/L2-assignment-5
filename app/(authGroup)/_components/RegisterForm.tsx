"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <Card className="p-5 space-y-2">
        <Input
          name="Name"
          type="name"
          placeholder="Enter Your Name"
          required
          className="p-5"
        />
        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
          className="p-5"
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
          className="p-5"
        />
        <Input
          name="role"
          type="text"
          placeholder="Enter Your Role"
          required
          className="p-5"
        />
        <Button className="p-5" type="submit">
          Register
        </Button>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-green-700" href={"/login"}>
            Login
          </Link>
        </p>
        {/* <Button className="p-5" type="submit">
          {pending ? <Spinner /> : "Login"}
        </Button> */}
      </Card>
    </form>
  );
};

export default RegisterForm;
