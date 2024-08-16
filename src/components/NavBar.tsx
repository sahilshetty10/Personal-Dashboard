import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = ({ name, profileImage }: any) => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };
  return (
    <header className="px-8 xl:px-16 pt-4">
      <nav className="flex items-center bg-background justify-between font-bold border px-8 h-20 rounded-xl">
        <Link href="/">
          <h1 className="cursor-pointer text-3xl">DashboardZen</h1>
        </Link>
        <ul className="flex gap-8 items-center">
          <Link href="/">
            <li className="cursor-pointer hidden xl:block">Home</li>
          </Link>
          <Link href="/configure">
            <li className="cursor-pointer">Configure</li>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src={profileImage}
                ></AvatarImage>
                <AvatarFallback>{name}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
