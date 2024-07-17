import { useState } from "react";
import ChatsContainer from "./ChatsContainer";
import Header from "./Header";
import Menu from "./Menu";

const MainContainer = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className="md:w-[480px] flex flex-col col-span-4 dark:bg-[#212121]  w-screen h-screen absolute">
      {menuStatus && <Menu />}
      <Header menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      <ChatsContainer />
    </div>
  );
};

export default MainContainer;
