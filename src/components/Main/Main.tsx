import { assets } from "../../assets";
import Suggestion from "./Suggestion";
import suggestions from "../Data";
import "./Main.css";
import SearchBox from "./SearchBox";
import { useContext, useEffect, useState } from "react";
import { PromptsContext } from "../../contexts/promptsContext";

const Main = () => {
  const {
    onSend,
    loading,
    showResult,
    resultData,
    recentPrompt,
    setSearchText,
  } = useContext(PromptsContext);

  const [suggestion, setSuggestion] = useState("");
  useEffect(() => {
    if (suggestion) {
      onSend();
    }
  }, [suggestion]);

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

      {showResult ? (
        <div className="result max-w-[900px] h-[67vh] overflow-y-scroll mx-auto px-4 mb-3">
          <div className="result-title my-10 mx-0 flex items-start gap-5">
            <img src={assets.user_icon} alt="" className="w-10 rounded-full" />
            <p>{recentPrompt}</p>
          </div>
          <div className="">
            <div className="result-data flex items-start gap-5">
              <img
                src={assets.gemini_icon}
                alt=""
                className="w-10 rounded-full"
              />
              {loading ? (
                <div className="loader w-[100%] flex flex-col gap-[10px]">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-lg font-[300] leading-[1.8]"
                ></p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[900px] mx-auto">
          <div className="greet self-start mt-[20px] mb-10 p-5 text-[56px] leading-[70px] text-[#c4c7c5] font-medium">
            <span className="gradient">Hello, Dear</span>
            <p>How can I assist you today?</p>
          </div>
          <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 w-full justify-center p-5">
            {suggestions.map((s, i) => (
              <div
                onClick={() => {
                  setSearchText(s.text);
                  setSuggestion(s.text);
                }}
                key={i} 
              >
                <Suggestion text={s.text} icon={s.icon} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="main-buttom max-w-[900px] px-4 pb-6 mx-auto">
        <SearchBox handleSearch={()=>onSend()} />
        <p className="info text-xs text-center mt-3 text-[#585858]">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default Main;
