"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { loginActions } from "../_actions/loginActions";
import { useActionState } from "react";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";

  const [state, action, pending] = useActionState(
    loginActions.bind(null, redirectTo),
    false,
  );

  return (
    <form action={action} className="space-y-4">
      <Card className="p-5 space-y-2">
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
        <Button className="p-5" type="submit">
          Login
        </Button>
        <p className="text-center">
          Dont have an account?{" "}
          <Link className="text-green-700" href={"/register"}>
            Register
          </Link>
        </p>
        {/* <Button className="p-5" type="submit">
          {pending ? <Spinner /> : "Login"}
        </Button> */}
      </Card>
    </form>
  );
};

export default LoginForm;
