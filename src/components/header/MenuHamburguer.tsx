"use client";

import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const MenuHamburguer = () => {
  // setting menu hamburguer
  const [openMenu, setOpenMenu] = useState(false);
  const toggleHamburguerMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <button onClick={toggleHamburguerMenu} className="md:hidden">
      {openMenu ? <CgClose size={24} /> : <CgMenu size={24} />}
    </button>
  );
};

export default MenuHamburguer;
