import "./index.css";
import Sidebar from "./components/Navbars/Sidebar";
import Header from "./components/Navbars/Header";
import InitialRouter from "./Router/InitialRouter";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="font-poppins">
      {!isLoginPage && <Sidebar />}
      {!isLoginPage && <Header />}
      <InitialRouter />
    </div>
  );
}

export default App;
