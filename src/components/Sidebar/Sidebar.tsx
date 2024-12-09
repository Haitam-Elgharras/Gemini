import { useContext, useState } from "react";
import { assets } from "../../assets";
import Item from "./Item";
import { PromptsContext } from "../../contexts/promptsContext";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { prevPrompts, onSend, newChat } = useContext(PromptsContext);
  const handleLoadPrompt = (prompt: string) => {
    onSend(prompt);
  };

  return (
    <div className="sidebar py-[10px] px-[15px] bg-[#f0f4f9] inline-flex flex-col justify-between ps-2 min-h-screen">
      <div className="top flex flex-col">
        <div className="menu size-5 m-4 cursor-pointer" onClick={toggleMenu}>
          <img src={assets.menu_icon} alt="Menu" />
        </div>
        <div onClick={newChat} className="bg-[#e6eaf1] mt-[30px] inline-flex justify-center items-center gap-[10px]  py-[10px] px-[15px] rounded-[50px] text-[14px] text-gray-500 cursor-pointer">
          <img src={assets.plus_icon} alt="" className="w-[20px]" />
          {menuOpen && <p className="bg-[#e6eaf1]">New Chat</p>}
        </div>
        {menuOpen && (
          <div className="recent">
            <p className="recent-title ms-3 text-lg mt-8 mb-5">Recent</p>
            {prevPrompts.map((prompt, index) => {
              return (
                <Item
                  key={index}
                  icon={assets.message_icon}
                  title={
                    prompt.length > 20 ? prompt.slice(0, 20) + "..." : prompt
                  }
                  menuOpen={menuOpen}
                  onLoadPrompt={() => handleLoadPrompt(prompt)}
                />
              );
            })}
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
