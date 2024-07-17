import { useGetMessages } from "../hooks/useGetMessages";
import MessageCard from "./MessageCard";
import MessageHeader from "./MessageHeader";

const MessageContainer = ({ id }) => {
  const messageList = useGetMessages(id);
  const sendersData = messageList.filter((message) => message.sender.id !== 1);
  const name = sendersData[0]?.sender?.name;

  return (
    <div className="md:col-span-8 h-screen flex flex-col w-full">
      <MessageHeader name={name} />
      <div className="overflow-y-scroll no-scrollbar flex-1">
        {messageList?.map((message) => (
          <MessageCard key={message.id} data={message} />
        ))}
      </div>
    </div>
  );
};

export default MessageContainer;
