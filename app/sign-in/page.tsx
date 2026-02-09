"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
        <Card className="w-4xl">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password to sign in
            </CardDescription>
          </CardHeader>
          <form>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="John@example.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="#dfjkjf878"
                  minLength={8}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col justify-between mt-5 gap-4">
              <Button
                type="submit"
                className="bg-pink-500 hover:bg-pink-700 transition-colors w-full"
              >
                Sign In
              </Button>
              <p>
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="text-blue-800 font-semibold">
                  Sign Up
                </Link>{" "}
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
};

export default SignIn;
