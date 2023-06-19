import { createContext, MouseEvent, useState } from "react";
import mixpanel from "mixpanel-browser";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FirstPage } from "./pages/FirstPage";
import { ThirdPage } from "./pages/ThirdPage";
import { SecondPage } from "./pages/SecondPage";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/first", element: <FirstPage /> },
  { path: "/second", element: <SecondPage /> },
  { path: "/third", element: <ThirdPage /> },
]);

const mixpanelId = import.meta.env.VITE_MIXPANEL_PROJECT_ID;

// Set this to a unique identifier for the user performing the event.
// eg: their ID in your database or their email address.
mixpanel.init(mixpanelId, { debug: true });

// Track an event. It can be anything, but in this example, we're tracking a Signed Up event.
// Include a property about the signup, like the Signup Type
// mixpanel.track("Signed Up", {
//   "Signup Type": "Referral",
// });
mixpanel.identify("max@example.com");

export const MixpanelContext = createContext<any>(mixpanel);

function App() {
  // const handleClick = (event: MouseEvent<HTMLElement>) => {
  //   // First arg is event name. This value will be shown as log title.
  //   // Second arg is propertiies. This values will shown as detail info in log.
  //   mixpanel.track(`Clicked ${(event.target as Element).className}`, { count });
  // };

  return (
    <>
      <MixpanelContext.Provider value={mixpanel}>
        <RouterProvider router={router} />
      </MixpanelContext.Provider>
    </>
  );
}

export default App;
