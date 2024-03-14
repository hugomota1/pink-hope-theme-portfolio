import React from "react";
import Link from "next/link";

const NavData = [
  { id: 1, caption: "Página Incial", link: "/" },
  { id: 2, caption: "Sobre mim", link: "/about" },
  { id: 3, caption: "Portfólio", link: "/portfolio" },
  { id: 4, caption: "eBook", link: "/ebook" },
  { id: 5, caption: "Contate-me", link: "/contact" },
];

const NavLinks = () => {
  return (
    <ul className="max-md:flex-col max-md:absolute max-md:top-[3.5rem] max-md:right-10 max-md:dark:bg-red-950  items-center gap-7">
      {NavData.map(({ id, caption, link }) => (
        <li className="" key={id}>
          <Link className="text-pink-400 dark:hover:text-purple-100 dark:hover:border-b dark:hover:border-purple-100 max-md:px-7" href={link}>{caption}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
