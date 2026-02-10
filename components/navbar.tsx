"use client";

import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./ui/signOutButton";
import { useSession } from "@/lib/auth/auth-client";

function Navbar() {
  const { data: session } = useSession();
  return (
    <>
      <nav className="border-b border-gray-300 bg-white">
        <div className="container mx-auto flex h-16 justify-between">
          <Link
            href={"/"}
            className="flex items-center gap-2 text-xl font-semibold text-pink-600"
          >
            <Briefcase />
            Job Tracker
          </Link>
          <div className="flex items-center gap-4">
            {session?.user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-black"
                >
                  <Button variant={"ghost"}>Dashboard</Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-pink-400 text-white">
                        {session.user.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {session.user.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {session.user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <div className="text-center">
                      <SignOutButton />
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-700 hover:text-black"
                >
                  <Button variant={"ghost"}>Sign In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-pink-500 text-white hover:bg-pink-600 transition-colors">
                    Star For Free
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
