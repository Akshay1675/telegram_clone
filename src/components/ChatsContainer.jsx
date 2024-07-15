import { useEffect, useState } from "react"
import ChatCard from "./ChatCard"
import { Link } from "react-router-dom"
import { useGetChartsData } from "../hooks/useGetChatsData"


const ChatsContainer = () => {
    const [activeChat, setActiveChat] = useState(null)
    
    const chatsData = useGetChartsData()
    
  return (
    <div className="overflow-y-scroll no-scrollbar h-full">
        {chatsData?.map((chat) => <Link key={chat.id} to={`/message?id=${chat.id}`}><ChatCard onClick={() => setActiveChat(chat.id)} isActive={activeChat === chat.id} data={chat}  /></Link>)}
    </div>
  )
}

export default ChatsContainer