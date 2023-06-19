import { useState } from "react";
import * as amplitude from "@amplitude/analytics-browser";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  amplitude.init(import.meta.env.VITE_AMPLITUDE_API, "user@amplitude.com");

  // Could add custom user properties if needed
  const identifyEvent = new amplitude.Identify();
  identifyEvent.set("location", "LAX");
  amplitude.identify(identifyEvent);

  const handleClick = (event: React.MouseEvent) => {
    amplitude.track(`Clicked ${(event.target as Element).className}`, {
      test: "test",
    });
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
      <button className="button-1" onClick={handleClick}>
        Button 1
      </button>
      <button className="button-2" onClick={handleClick}>
        Button 2
      </button>
      <button className="button-3" onClick={handleClick}>
        Button 3
      </button>
      <button className="button-4" onClick={handleClick}>
        Button 4
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
