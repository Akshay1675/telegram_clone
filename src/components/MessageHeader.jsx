import { EllipsisVertical, Home, Search } from "lucide-react";
import { Link } from "react-router-dom";

const MessageHeader = ({ name }) => {
  return (
    <div className="px-6 py-4 shadow-lg flex justify-between items-center sticky top-0 bg-white dark:bg-[#212121] dark:text-white">
      <Link to={"/"}>
        <Home className="md:hidden cursor-pointer" />
      </Link>
      <h2 className="font-bold text-lg ">{name ? name : "Akshay Desai"}</h2>
      <div className="flex items-center ">
        <Search className="mx-6" />
        <EllipsisVertical />
      </div>
    </div>
  );
};

export default MessageHeader;
