import { menuList } from "../utils/constants"

const Menu = () => {
  return (
    <div className="px-2 py-3 mt-14 ml-4 rounded-xl absolute bg-white w-[17rem] shadow-xl">
        <ul>
          {menuList.map((m,i) => <li className="px-4 py-1 font-bold hover:bg-gray-100" key={i}>
            {m}
          </li>)}
        </ul>
    </div>
  )
}

export default Menu