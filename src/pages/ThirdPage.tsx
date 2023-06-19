import { useContext } from "react";
import { OverridedMixpanel } from "mixpanel-browser";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { MixpanelContext } from "../App";

export const ThirdPage = () => {
  const mixpanel: OverridedMixpanel = useContext(MixpanelContext);

  const handleClick = (event: React.MouseEvent) => {
    mixpanel.track(`Clicked ${(event.target as Element).className}`, {
      test: "test",
    });
  };
  return (
    <>
      <h1>Third Page</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button className="page3-button" onClick={handleClick}>
          page3 button
        </button>
      </div>
    </>
  );
};
