import { createContext, ReactNode } from "react";
import run from "../config/gemini";
import usePromptsState from "../hooks/usePromptsState";
import { formatResponse } from "../utils/responseFormatter";

interface PromptContextType {
  searchText: string;
  setSearchText: (text: string) => void;
  recentPrompt: string;
  setRecentPrompt: (text: string) => void;
  prevPrompts: string[];
  setPrevPrompts: React.Dispatch<React.SetStateAction<string[]>>;
  showResult: boolean;
  setShowResult: (show: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  resultData: string;
  setResultData: (data: any) => void;
  onSend: (prompt?:string) => void;
  newChat: () => void;
}

export const PromptsContext = createContext<PromptContextType>(
  {} as PromptContextType
);

const PromptsContextProvider = ({ children }: { children: ReactNode }) => {
  const state = usePromptsState();
  const {
    searchText,
    setSearchText,
    setRecentPrompt,
    setPrevPrompts,
    setShowResult,
    setLoading,
    setResultData,
  } = state;

  const onSend = async (prompt?: string) => {
    setLoading(true);
    setResultData("");
    setShowResult(true);
    let response;
    if (prompt) {
      setRecentPrompt(prompt);
      response = run(prompt);
    }
    else {
      setRecentPrompt(searchText);
      setPrevPrompts((prev: string[]) => [...prev, searchText]);
      response = run(searchText);
      setSearchText("");
    }
    const res = await response;
    formatResponse(res, (word) => setResultData((prev) => prev + word))
    setLoading(false);
  };
  
  const newChat = () => {
    setShowResult(false);
    setResultData("");
    setRecentPrompt("");
  };

  const contextValue = {
    ...state,
    onSend,
    newChat
  };

  return (
    <PromptsContext.Provider value={contextValue}>
      {children}
    </PromptsContext.Provider>
  );
};

export default PromptsContextProvider;
