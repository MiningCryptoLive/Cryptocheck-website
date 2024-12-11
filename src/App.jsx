import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinPage from "./routes/CoinPage";
import CoinStats from "./routes/CoinStats.jsx";
import Title from "./components/Title.jsx";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <Router>
        <Routes>
          <Route path="/CoinPage/:id" element={<CoinPage />} />
          <Route path="/" element={<CoinStats />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
