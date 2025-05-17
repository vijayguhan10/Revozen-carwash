import "./index.css";
import Sidebar from "./components/Navbars/Sidebar";
import Header from "./components/Navbars/Header";
import InitialRouter from "./Router/InitialRouter";

function App() {
  return (
    <div className="font-poppins">
      <Sidebar />
      <Header />
      <InitialRouter />
    </div>
  );
}

export default App;
