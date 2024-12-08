import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MagazineView from "./pages/MagazineView";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/magazine/:title" element={<MagazineView />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
