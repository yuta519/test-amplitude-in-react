import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { FirstPage } from "./pages/FirstPage";
import { ThirdPage } from "./pages/ThirdPage";
import { SecondPage } from "./pages/SecondPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/first", element: <FirstPage /> },
  { path: "/second", element: <SecondPage /> },
  { path: "/third", element: <ThirdPage /> },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
