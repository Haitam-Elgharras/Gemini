interface SuggestionProps {
    text: string;
    icon: string;
}


const Suggestion = ({ text, icon }: SuggestionProps) => {
  return (
    <div className="card flex flex-col items-center py-3 bg-[#f0f4f9] rounded-xl h-[200px] justify-between hover:bg-[#dfe4ea] cursor-pointer">
        <p className="mx-3 px-3 text-lg text-gray-600 text-[14px]">{text}</p>
        <img src={icon} alt="icon" className="w-8 rounded-full bg-white p-1 self-end mr-2" />
    </div>
  )
}

export default Suggestion