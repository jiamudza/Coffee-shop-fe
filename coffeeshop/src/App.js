import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import Login from "./pages/auth/login";
import LandingPage from "./pages/landingPage";
import RestrictedRoute from "./routes/restrictedRoutes";
import Restricted from "./pages/restrictedPage";
import Product from "./pages/product";
import ProductDetail from "./pages/productDetail";
import Payment from "./pages/payment";
import Register from "./pages/auth/register";
import History from "./pages/history";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/payment" element={<PrivateRoutes><Payment /></PrivateRoutes>} />
        <Route path="/restricted" element={<PrivateRoutes><Restricted /></PrivateRoutes>} />
        <Route path="/history" element={<PrivateRoutes><History /></PrivateRoutes>} />
        <Route path="/login" element={<RestrictedRoute><Login /></RestrictedRoute>} />
        <Route path="/register" element={<RestrictedRoute><Register /></RestrictedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
