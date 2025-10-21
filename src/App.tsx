import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
