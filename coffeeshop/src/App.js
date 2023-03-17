import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import Login from "./pages/auth/login";
import LandingPage from "./pages/landingPage";
import RestrictedRoute from "./routes/restrictedRoutes";
import Restricted from "./pages/restrictedPage";
import Product from "./pages/product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/restricted" element={<PrivateRoutes><Restricted /></PrivateRoutes>} />
        <Route path="/login" element={<RestrictedRoute><Login /></RestrictedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
