import { useSearchParams } from "react-router-dom"
import MainContainer from "./MainContainer"
import MessageContainer from "./MessageContainer"

const Messages = () => {
    const [search] = useSearchParams()
    const chatId = search.get("id")
  return (
    <div className="md:grid md:grid-cols-12">
        <div className="hidden md:block md:col-span-4">
        <MainContainer />
        </div>
        
        <MessageContainer id={chatId}/>
    </div>
  )
}
   
export default Messages