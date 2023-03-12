import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import Login from "./pages/auth/login";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
