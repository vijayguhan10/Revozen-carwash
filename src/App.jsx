import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Navbars/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
