import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinPage from "./Routes/CoinPage";
import CoinsStats from "./Routes/CoinsStats.jsx";
import Footer from "./Component/Footer.jsx"
import Title from "./Component/Title.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Title />
      <Router>
        <Routes>
          <Route path="/CoinPage/:id" element={<CoinPage />} />
          <Route path="/" element={<CoinsStats />} exact />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}
