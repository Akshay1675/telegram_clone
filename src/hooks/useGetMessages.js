import { useEffect, useState } from "react"

export const useGetMessages = (id) => {
    const [messageList, setMessageList] = useState([])


    useEffect(() => {
        getMessages()
    }, [id])

   
    const getMessages = async () => {
        const data = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`)
        const json = await data.json()
        setMessageList(json?.data)
    }

    return messageList
}