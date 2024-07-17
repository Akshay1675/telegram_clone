const MessageCard = ({ data }) => {
  return (
    <div
      className={`relative max-w-[32rem] md:w-fit  mx-10  my-2 px-4 py-2 border dark:border-none rounded-2xl ${
        data.sender_id === 1
          ? "bg-green-300 ml-20 dark:bg-[#8774e1]"
          : "bg-white dark:bg-[#212121]"
      }`}
    >
      <p className="font-medium dark:text-white">{data.message}</p>
    </div>
  );
};

export default MessageCard;
