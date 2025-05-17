import { useState } from "react";
import "./index.css";
import Sidebar from "./components/Navbars/Sidebar";
import Header from "./components/Navbars/Header";
import DashBoard from "./components/DashBoard/DashBoard";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="font-poppins">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <Header sidebarCollapsed={sidebarCollapsed} />
      <DashBoard sidebarCollapsed={sidebarCollapsed} />
    </div>
  );
}

export default App;
