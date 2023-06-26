import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => navigate("/first")}> page1 </button>
        <button onClick={() => navigate("/second")}> page2 </button>
        <button onClick={() => navigate("/third")}> page3 </button>
      </div>
    </>
  );
};
