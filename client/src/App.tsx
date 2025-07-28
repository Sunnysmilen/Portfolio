import { Outlet } from "react-router";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default App;
