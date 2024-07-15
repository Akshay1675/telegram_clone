import { useState } from "react"
import ChatsContainer from "./ChatsContainer"
import Header from "./Header"
import Menu from "./Menu"

const MainContainer = () => {
    const [menuStatus, setMenuStatus] = useState(false)
    return (
        <div className="flex col-span-4">
        <div className="w-[420px] h-screen ">
            {menuStatus && <Menu />}
            <Header menuStatus={menuStatus} setMenuStatus={setMenuStatus}/>
            <ChatsContainer />
        </div>
        </div>
    )
}

export default MainContainer