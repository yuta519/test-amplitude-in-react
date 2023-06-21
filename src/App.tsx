import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext } from "react";
import { Home } from "./pages/Home";
import { FirstPage } from "./pages/FirstPage";
import { ThirdPage } from "./pages/ThirdPage";
import { SecondPage } from "./pages/SecondPage";
import * as amplitude from "@amplitude/analytics-browser";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/first", element: <FirstPage /> },
  { path: "/second", element: <SecondPage /> },
  { path: "/third", element: <ThirdPage /> },
]);

const DefaultConfiguration = {
  plan: {
    version: "1",
    branch: "main",
    source: "browser-ts-ampli-v2",
    versionId: "a61c3908-ca4d-4c8d-8f81-54ad3ba17b9c",
  },
  ...{
    ingestionMetadata: {
      sourceName: "browser-typescript-ampli",
      sourceVersion: "2.0.0",
    },
  },
};

amplitude.init(import.meta.env.VITE_AMPLITUDE_API, { ...DefaultConfiguration });
export const AmpliContext = createContext<any>(amplitude);

function App() {
  return (
    <AmpliContext.Provider value={amplitude}>
      <RouterProvider router={router} />
    </AmpliContext.Provider>
  );
}

export default App;
