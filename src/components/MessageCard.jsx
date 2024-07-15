
const MessageCard = ({data}) => {
  return (
    <div className={`max-w-[32rem] w-fit  mx-10 my-2 px-4 py-2 border rounded-2xl ${data.sender_id === 1 ? "bg-green-100 ml-20" : "bg-gray-50"}`}>
        <p className="font-medium ">{data.message}</p>
    </div>
  )
}

export default MessageCard