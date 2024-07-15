import { useGetMessages } from "../hooks/useGetMessages"
import MessageCard from "./MessageCard"
import MessageHeader from "./MessageHeader"

const MessageContainer = ({id}) => {
  
  const messageList = useGetMessages(id)
  const sendersData = messageList.filter(message => message.sender.id !== 1)
  const name = sendersData[0].sender.name
    
  return (
    <div className="md:col-span-8 overflow-y-scroll no-scrollbar h-screen w-full bg-slate-100">
        <MessageHeader name={name}/>
        {messageList?.map(message => <MessageCard key={message.id} data={message}/>) }
    </div>
  )
}

export default MessageContainer