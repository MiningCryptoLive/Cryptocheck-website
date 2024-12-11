import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinPage from "./routes/CoinPage";
import CoinsStats from "./routes/CoinsStats.jsx";
import Footer from "./components/Footer.jsx";
import Title from "./components/Title.jsx";

export default function App() {

  useEffect(() => {
    const timer = console.log.apply(console, [
      "%c Designed and Coded by Laura Głąb",
      "color: white" +
        "; background: padding:5px 0; border-radius: 5px; font-weight: bold; background-color: #df8653;",
    ]);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <Title />
        <Routes>
          <Route path="/CoinPage/:id" element={<CoinPage />} />
          <Route path="/" element={<CoinsStats />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
