import { useState } from "react";
import { assets } from "../../assets/assets";

interface SearchBoxProps {
  handleSearch: (searchText: string) => void;
}

const SearchBox = ({ handleSearch }: SearchBoxProps) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-box flex justify-center items-center gap-2 bg-[#f0f4f9] rounded-full p-2 px-5">
      <input
        type="text"
        placeholder="Enter your prompt"
        className="w-full p-2 rounded-[10px] outline-none bg-transparent text-lg"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img
        src={assets.gallery_icon}
        alt="gallery"
        className="w-6 h-6 cursor-pointer"
      />
      <img src={assets.mic_icon} alt="mic" className="w-6 h-6 cursor-pointer" />
      {searchText && (
        <img
          src={assets.send_icon}
          alt="send"
          className="w-6 h-6 cursor-pointer"
          onClick={() => handleSearch(searchText)}
        />
      )}
    </div>
  );
};

export default SearchBox;
