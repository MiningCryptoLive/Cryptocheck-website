import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import CoinPage from "./Routes/CoinPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CoinPage/:id" element={<CoinPage />} />
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Router>
);
}

export default App;
