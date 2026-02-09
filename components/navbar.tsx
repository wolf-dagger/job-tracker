import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
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
            <Link href="/sign-in" className="text-gray-700 hover:text-black">
              <Button variant={"ghost"}>Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-pink-500 text-white hover:bg-pink-600 transition-colors">
                Star For Free
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
