import { assets } from "../../assets/assets"
import Suggestion from "./Suggestion"

const suggestions = [
    {
        text: "Suggest beautiful places to see on an upcoming trip",
        icon: assets.compass_icon
    },
    {
        text: "Briefly summarize this concept: urban planning",
        icon: assets.bulb_icon
    },
    {
        text: "Brainstorm team bonding activities for our work retreat",
        icon: assets.message_icon
    },
    {
        text: "Tell me about React js and React native",
        icon: assets.code_icon
    },
]

const Main = () => {
  return (
    <div className="main flex-1">
        <div className="nav flex justify-between p-5">
            <p className="text-2xl text-[#585858]">Gemini</p>
            <img
             src={assets.user_icon} alt="user"
             className="w-10 h-10 rounded-full"
              />
        </div>

        <div className="container w-[900px] mx-auto">
            <div className="greet self-start mt-20 mb-16">
                <p className="gradient text-2xl font-bold">Hello Haitam,</p>
                <p className="text-[#585858]">How can I assist you today?</p>
            </div>
            <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 w-full justify-center">
                {suggestions.map((s, i) => <Suggestion key={i} text={s.text} icon={s.icon} />)}
            </div>
        </div>
    </div>
  )
}

export default Main