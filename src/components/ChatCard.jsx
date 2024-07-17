const ChatCard = ({ data, isActive, onClick }) => {
  return (
    <div
      className={`mx-4 my-4 border  px-4 py-2 ${
        isActive
          ? "bg-blue-500 dark:bg-[#8774e1]  text-white hover:bg-blue-500 dark:hover:bg-[#8774e1]"
          : "hover:bg-gray-200  dark:hover:bg-gray-600"
      } rounded-xl 
      }`}
      onClick={onClick}
    >
      <h2 className="font-semibold dark:text-white  text-lg mx-4 my-2">
        {data.creator.name ? data.creator.name : "Akshay Desai"}
      </h2>
    </div>
  );
};

export default ChatCard;
