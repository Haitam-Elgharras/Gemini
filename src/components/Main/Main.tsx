import { assets } from "../../assets/assets";
import Suggestion from "./Suggestion";
import "./Main.css";

const suggestions = [
  {
    text: "Suggest beautiful places to see on an upcoming trip",
    icon: assets.compass_icon,
  },
  {
    text: "Briefly summarize this concept: urban planning",
    icon: assets.bulb_icon,
  },
  {
    text: "Brainstorm team bonding activities for our work retreat",
    icon: assets.message_icon,
  },
  {
    text: "Tell me about React js and React native",
    icon: assets.code_icon,
  },
];

const Main = () => {
  return (
    <div className="main flex-1">
      <div className="nav flex justify-between p-5">
        <p className="text-2xl text-[#585858]">Gemini</p>
        <img
          src={assets.user_icon}
          alt="user"
          className="w-10 h-10 rounded-full"
        />
      </div>

      <div className="max-w-[900px] mx-auto">
        <div className="greet self-start mt-[20px] mb-10 p-5 text-[56px] leading-[70px] text-[#c4c7c5] font-medium">
          <span className="gradient">Hello Haitam,</span>
          <p>How can I assist you today?</p>
        </div>
        <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 w-full justify-center p-5">
          {suggestions.map((s, i) => (
            <Suggestion key={i} text={s.text} icon={s.icon} />
          ))}
        </div>
      </div>
      <div className="main-buttom max-w-[900px] px-4 pb-6 mx-auto">
        <div className="search-box flex justify-center items-center gap-2 bg-[#f0f4f9] rounded-full p-2 px-5">
          <input
            type="text"
            placeholder="Enter your prompt"
            className="w-full p-2 rounded-[10px] outline-none bg-transparent text-[#585858] text-lg"
          />
            <img src={assets.gallery_icon} alt="gallery" className="w-6 h-6 cursor-pointer" />
            <img src={assets.mic_icon} alt="mic" className="w-6 h-6 cursor-pointer" />
            <img src={assets.send_icon} alt="send" className="w-6 h-6 cursor-pointer" />
        </div>
        <p className="info text-xs text-center mt-3 text-[#585858]">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
      </div>
    </div>
  );
};

export default Main;
