import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import MenuHamburguer from "./MenuHamburguer";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-pink-300 dark:bg-pink-950">
      {/* Navbar */}
      <nav className="relative flex justify-center items-center w-full min-h-[4.5rem] dark:text-[#fff] text-[#000]border-b-2 border-pink-500">
        <div className="container flex items-center justify-between w-screen">
          {/* image Logo */}
          <Link href="/">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
          {/* Import NavLinks in list */}
          <NavLinks />
          <div className="gap-7 p-[0.15rem] rounded-full flex justify-center items-center">
            <ThemeSwitch />
            <MenuHamburguer />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
