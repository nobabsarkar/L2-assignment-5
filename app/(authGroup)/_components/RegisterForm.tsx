"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";
import { useActionState, useState } from "react";
import { registerActions } from "../_actions/registerActions";

const RegisterForm = () => {
  const [role, setRole] = useState("");
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";

  const [state, action, pending] = useActionState(registerActions, false);

  return (
    <form action={action} className="space-y-4">
      <Card className="p-5 space-y-2">
        <Input
          name="name"
          type="text"
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
        <Select onValueChange={setRole}>
          <SelectTrigger className="w-full p-5">
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="TENANT">TENANT</SelectItem>
            <SelectItem value="LANDLORD">LANDLORD</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="role" value={role} />

        <Button className="p-5 cursor-pointer" type="submit">
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
