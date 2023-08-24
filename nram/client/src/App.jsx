import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoadingSpinner from "./components/LoadingSpinner";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Voice from "./pages/Voice";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/google/callback" element={<LoadingSpinner />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/voice" element={<Voice />} />
      </Routes>
    </Router>
  );
}
