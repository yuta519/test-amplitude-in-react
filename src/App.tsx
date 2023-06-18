import { MouseEvent, useState } from "react";
import mixpanel from "mixpanel-browser";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.css";
import { useNavigate } from "react-router-dom";

const mixpanelId = import.meta.env.VITE_MIXPANEL_PROJECT_ID;
mixpanel.init(mixpanelId, { debug: true });

// Set this to a unique identifier for the user performing the event.
// eg: their ID in your database or their email address.
mixpanel.identify("max@example.com");

// Track an event. It can be anything, but in this example, we're tracking a Signed Up event.
// Include a property about the signup, like the Signup Type
// mixpanel.track("Signed Up", {
//   "Signup Type": "Referral",
// });

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    // First arg is event name. This value will be shown as log title.
    // Second arg is propertiies. This values will shown as detail info in log.
    mixpanel.track(`Clicked ${(event.target as Element).className}`, { count });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button className="button-1" onClick={handleClick}>
          Button 1
        </button>
      </div>
      <div className="card">
        <button className="button-2" onClick={handleClick}>
          Button 2
        </button>
      </div>
      <div className="card">
        <button className="button-3" onClick={handleClick}>
          Button 3
        </button>
      </div>
      <div className="card">
        <button onClick={() => navigate("/first")}>First Page</button>
        <button onClick={() => navigate("/second")}>Second Page</button>
        <button onClick={() => navigate("/third")}>Third Page</button>
      </div>
    </>
  );
}

export default App;
