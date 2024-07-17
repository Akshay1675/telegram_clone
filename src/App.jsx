import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Messages from "./components/Messages";
import bgImage from "./assets/download.png";
import bgImageDark from "./assets/download (1).png";
import { useSelector } from "react-redux";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "/message",
      element: <Messages />,
    },
  ]);

  const darkMode = useSelector((store) => store.app.darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      {darkMode ? (
        <img
          src={bgImageDark}
          className=" absolute object-covery md:ml-[495px] md:w-[66vw]  h-screen"
        />
      ) : (
        <img
          src={bgImage}
          className="opacity-10 absolute object-covery md:ml-[495px] md:w-[66vw]  h-screen"
        />
      )}

      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
