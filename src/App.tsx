import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
