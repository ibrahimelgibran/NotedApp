"use client";

import { User } from "@utils/types";
import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Theme = ({ user }: { user: User }) => {
  const isSystemDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [isDarkTheme, setIsDarkTheme] = React.useState(isSystemDarkTheme);

  const applyDarkTheme = () => {
    document.documentElement.classList.add("dark");
    setIsDarkTheme(true);
  };

  const switchTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkTheme(!isDarkTheme);
  };

  // set initial theme
  React.useEffect(() => {
    user.login
      ? user.darkTheme
        ? applyDarkTheme() : setIsDarkTheme(false)
      : isSystemDarkTheme
        ? applyDarkTheme() : setIsDarkTheme(false)
  }, [user, isSystemDarkTheme]);

  return (
    <button
      onClick={switchTheme}
      className="w-8 aspect-square rounded-full grid place-items-center bg-card text-title select-none cursor-pointer">
      {isDarkTheme ? <FaMoon /> : <BsFillSunFill />}
    </button>
  );
};

export default Theme;
