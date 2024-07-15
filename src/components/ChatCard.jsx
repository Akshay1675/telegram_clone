
const ChatCard = ({data, isActive, onClick}) => {

    
  return (
    <div className={`mx-4 my-4 border px-4 py-2 hover:bg-gray-200  rounded-xl ${isActive ? "bg-blue-300" : ""}`} onClick={onClick}>
        <h2 className="font-semibold text-lg mx-4 my-2">{data.creator.name? data.creator.name : "Akshay Desai"}</h2>
    </div>
  )
}

export default ChatCard