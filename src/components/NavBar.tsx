import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="px-8 xl:px-16 pt-4">
      <nav className="flex items-center bg-background justify-between font-bold border px-8 h-20 rounded-xl">
        <Link href="/">
          <h1 className="cursor-pointer text-3xl">DashboardZen</h1>
        </Link>
        <ul className="flex gap-8">
          <Link href="/">
            <li className="cursor-pointer hidden xl:block">Home</li>
          </Link>
          <Link href="/configure">
            <li className="cursor-pointer">Configure</li>
          </Link>
          <li
            className="cursor-pointer"
            onClick={() => {
              localStorage.removeItem("userId");
              window.location.href = "/login";
            }}
          >
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
