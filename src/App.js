import "./App.css";
import HomePage from "./pages/home";
import Header from "./components/header/header";
import { Routes, Route, Navigate } from "react-router-dom";
import HeaderComponent from "./components/header/comp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
