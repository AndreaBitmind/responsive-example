import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/HomePage";
import { DetailsPage } from "./pages/DetailsPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/image/:image_id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
