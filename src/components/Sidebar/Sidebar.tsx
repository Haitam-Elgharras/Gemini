import { useState } from "react";
import { assets } from "../../assets/assets";
import Item from "./Item";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="sidebar py-[10px] px-[15px] bg-[#f0f4f9] inline-flex flex-col justify-between ps-2 min-h-screen">
      {/*  justify-between gap-3 cursor-pointer */}
      <div className="top flex flex-col">
        <div className="menu size-5 m-4 cursor-pointer" onClick={toggleMenu}>
          <img src={assets.menu_icon} alt="Menu" />
        </div>
        <div className="bg-[#e6eaf1] mt-[30px] inline-flex justify-center items-center gap-[10px]  py-[10px] px-[15px] rounded-[50px] text-[14px] text-gray-500 cursor-pointer">
          <img src={assets.plus_icon} alt="" className="w-[20px]" />
          {menuOpen && <p className="bg-[#e6eaf1]">New Chat</p>}
        </div>
        {menuOpen && (
          <div className="recent">
            <p className="recent-title ms-3 text-lg mt-8 mb-5">Recent</p>
            <Item
              icon={assets.message_icon}
              title="What is ...."
              menuOpen={menuOpen}
            />
          </div>
        )}
      </div>

      <div className="buttom mb-5">
        <Item icon={assets.question_icon} title="Help" menuOpen={menuOpen} />
        <Item icon={assets.history_icon} title="Activity" menuOpen={menuOpen} />
        <Item icon={assets.setting_icon} title="Settings" menuOpen={menuOpen} />
      </div>
    </div>
  );
};

export default Sidebar;
