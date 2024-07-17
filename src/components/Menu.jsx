import { useState } from "react";
import { menuList } from "../utils/constants";
import {
  Archive,
  Bookmark,
  CircleFadingPlus,
  Contact,
  MoonStar,
  Settings,
  Sun,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/appSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((appStore) => appStore.app.darkMode);

  const handleDarkModeClick = () => {
    dispatch(toggleDarkMode());
  };

  console.log(darkMode);

  const icons = [
    !darkMode ? <MoonStar key={1} /> : <Sun />,
    <Archive key={2} />,
    <CircleFadingPlus key={3} />,
    <Contact key={4} />,
    <Settings key={5} />,
    <Bookmark key={1} />,
  ];

  return (
    <div className="px-2 py-3 mt-14 ml-4 rounded-xl absolute dark:bg-[#212121] dark:text-white  bg-white w-[17rem] shadow-xl">
      <ul className="">
        {menuList.map((m, i) => (
          <li
            className="px-2 rounded-lg py-1 cursor-pointer flex items-center font-bold hover:bg-gray-100 dark:hover:bg-gray-600"
            onClick={
              m.toLowerCase() === "dark mode" ? handleDarkModeClick : undefined
            }
            key={i}
          >
            {<span className="ml-2 mr-6 my-1">{icons[i]}</span>}
            {m.toLowerCase() === "dark mode"
              ? darkMode
                ? "Light Mode"
                : m
              : m}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
