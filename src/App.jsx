import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from "./components/MainContainer"
import Messages from "./components/Messages"

function App() {

  const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <MainContainer />,
    },
    {
      path: "/message",
      element: <Messages />
    },
])

  return (
    <div className="">
     <RouterProvider router={appRouter}/>
    </div>
   
  )
}

export default App
