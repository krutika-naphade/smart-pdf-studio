import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GeneratePDF from "./pages/GeneratePDF";
import Preview from "./pages/Preview";
import History from "./pages/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generate" element={<GeneratePDF />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
