import "./App.css";
import HomePage from "./pages/home";
import { Routes, Route, Navigate } from 'react-router-dom';
import FeePlan from "./pages/feePlan";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fee-for-quran-course" element={<FeePlan />} />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </div>
  );
}

export default App;
