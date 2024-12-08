import { assets } from "../../assets/assets";
import Suggestion from "./Suggestion";
import suggestions from "../Data";
import "./Main.css";
import SearchBox from "./SearchBox";

const Main = () => {
  const handleSearch = (searchText: string) => {
    console.log(searchText);
  };

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
          <span className="gradient">Hello, Haitam</span>
          <p>How can I assist you today?</p>
        </div>
        <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 w-full justify-center p-5">
          {suggestions.map((s, i) => (
            <Suggestion key={i} text={s.text} icon={s.icon} />
          ))}
        </div>
      </div>
      <div className="main-buttom max-w-[900px] px-4 pb-6 mx-auto">
        <SearchBox handleSearch={handleSearch} />
        <p className="info text-xs text-center mt-3 text-[#585858]">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default Main;
