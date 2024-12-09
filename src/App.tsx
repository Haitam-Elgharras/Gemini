import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"
import PromptsContextProvider from "./contexts/promptsContext"

const App = () => {
  return (
    <PromptsContextProvider >
      <Sidebar />
      <Main />
    </PromptsContextProvider>
  )
}

export default App