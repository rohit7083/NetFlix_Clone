import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
