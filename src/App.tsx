import { MouseEvent, useState } from "react";
import mixpanel from "mixpanel-browser";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const mixpanelId = import.meta.env.VITE_MIXPANEL_PROJECT_ID;
mixpanel.init(mixpanelId, { debug: true });

// Set this to a unique identifier for the user performing the event.
// eg: their ID in your database or their email address.
mixpanel.identify("ytkwmr18@gmail.com");

// Track an event. It can be anything, but in this example, we're tracking a Signed Up event.
// Include a property about the signup, like the Signup Type
// mixpanel.track("Signed Up", {
//   "Signup Type": "Referral",
// });

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
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
    </>
  );
}

export default App;
