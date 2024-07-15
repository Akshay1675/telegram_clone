import { useEffect, useState } from "react"

export const useGetChartsData = () => {
    const [chatsData, setChatsData] = useState([])

    useEffect(() =>  {
        getChatsData()
    }, [])

    const getChatsData = async () => {
        const data = await fetch("https://devapi.beyondchats.com/api/get_all_chats?page=1")
        const json = await data.json()
        setChatsData(json?.data?.data)
    }

    return chatsData
}