import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Work from "./pages/Work";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/works" element={<Works />} />
        <Route path="/work/:slug" element={<Work />} /> {/* Dynamic route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
