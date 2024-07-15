import {  Menu } from "lucide-react"

const Header = ({menuStatus, setMenuStatus}) => {
  return (
    <div className="flex mx-4 my-2 items-center ">
        <Menu className="mr-4 cursor-pointer hover:bg-gray-100  rounded-full" onClick={() => setMenuStatus(!menuStatus)} />
        <input
        className="flex h-10 rounded-2xl border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1  disabled:cursor-not-allowed disabled:opacity-50 w-full"
        type="text"
        placeholder="Search"
      ></input>
    </div>
  )
}

export default Header