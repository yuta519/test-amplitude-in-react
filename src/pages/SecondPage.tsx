import { useContext } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { AmpliContext } from "../App";

export const SecondPage = () => {
  const amplitude = useContext(AmpliContext);

  const handleClick = (event: React.MouseEvent) => {
    amplitude.track(`Clicked ${(event.target as Element).className}`, {
      test: "test",
    });
  };

  return (
    <>
      <h1>First Page</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button className="page2-button" onClick={handleClick}>
          page2 button
        </button>
      </div>
    </>
  );
};
