import ContactPage from "pages/ContactPage";
import HomePage from "pages/HomePage";
import OtherSections from "pages/OtherSections";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other-sections" element={<OtherSections />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
