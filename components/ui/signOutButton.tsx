"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./dropdown-menu";
import { useRouter } from "next/navigation";

function SignOutButton() {
  const router = useRouter();
  return (
    <>
      <DropdownMenuItem
        className="bg-gray-400 text-white  hover:bg-red-600 transition-colors flex justify-center mt-4 mb-2"
        onClick={async () => {
          const result = await signOut();

          if (result.data) {
            router.push("/sign-in");
          } else {
            alert("Error signing out");
          }
        }}
      >
        Log out
      </DropdownMenuItem>
    </>
  );
}

export default SignOutButton;
