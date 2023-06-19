import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext } from "react";
import { Ampli } from "./Ampli";
import { Home } from "./pages/Home";
import { FirstPage } from "./pages/FirstPage";
import { ThirdPage } from "./pages/ThirdPage";
import { SecondPage } from "./pages/SecondPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/first", element: <FirstPage /> },
  { path: "/second", element: <SecondPage /> },
  { path: "/third", element: <ThirdPage /> },
]);

const ampli = new Ampli();
ampli.init(import.meta.env.VITE_AMPLITUDE_API, "user@amplitude.com");
export const AmpliContext = createContext<any>(ampli);

function App() {
  ampli.init(import.meta.env.VITE_AMPLITUDE_API, "user@amplitude.com");

  return (
    <AmpliContext.Provider value={ampli}>
      <RouterProvider router={router} />
    </AmpliContext.Provider>
  );
}

export default App;
