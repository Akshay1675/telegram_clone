import { Menu } from "lucide-react";

const Header = ({ menuStatus, setMenuStatus }) => {
  return (
    <div className="flex mx-4 my-2 items-center bg-white dark:bg-[#212121]">
      <Menu
        className="mr-4 cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full"
        onClick={() => setMenuStatus(!menuStatus)}
      />
      <input
        className="flex h-10 rounded-2xl border dark:bg-black dark:text-white dark:border-gray-300/30 border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 dark:placeholder:text-gray-100 focus:outline-none focus:ring-1  disabled:cursor-not-allowed disabled:opacity-50 w-full"
        type="text"
        placeholder="Search"
      ></input>
    </div>
  );
};

export default Header;
