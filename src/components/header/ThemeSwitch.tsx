"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);

  return (
    <button>
      <FiMoon size={20}/>
    </button>
  );
};

export default ThemeSwitch;
