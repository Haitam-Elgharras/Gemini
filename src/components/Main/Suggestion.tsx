interface SuggestionProps {
    text: string;
    icon: string;
}


const Suggestion = ({ text, icon }: SuggestionProps) => {
  return (
    <div className="card relative py-3 bg-[#f0f4f9] rounded-[10px] h-[200px] hover:bg-[#dfe4ea] cursor-pointer">
        <p className="mx-3 px-3 text-lg text-gray-600 text-[17px]">{text}</p>
        <img src={icon} alt="icon" className="w-8 rounded-full bg-white p-1 self-end absolute right-3 bottom-3" />
    </div>
  )
}

export default Suggestion