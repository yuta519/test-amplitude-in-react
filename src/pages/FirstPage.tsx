import { useContext } from "react";
import { OverridedMixpanel } from "mixpanel-browser";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { MixpanelContext } from "../App";

export const FirstPage = () => {
  const mixpanel: OverridedMixpanel = useContext(MixpanelContext);

  const handleClick = (event: React.MouseEvent) => {
    mixpanel.track(`Clicked ${(event.target as Element).className}`, {
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
        <button className="page1-button" onClick={handleClick}>
          page1 button
        </button>
      </div>
    </>
  );
};
