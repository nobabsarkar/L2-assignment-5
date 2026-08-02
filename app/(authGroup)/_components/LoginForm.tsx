"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { loginActions } from "../_actions/loginActions";
import { useActionState, useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";
  const router = useRouter();

  const [state, action, pending] = useActionState(
    loginActions.bind(null, redirectTo),
    false,
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message);

      router.push(state.redirectTo || "/");
    } else {
      toast.error(state.messsage);
    }
  }, [state, router]);

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
        <Button className="p-5 cursor-pointer" type="submit">
          {pending ? <Spinner /> : "Login"}
        </Button>
        <p className="text-center">
          Dont have an account?{" "}
          <Link className="text-green-700" href={"/register"}>
            Register
          </Link>
        </p>
      </Card>
    </form>
  );
};

export default LoginForm;
