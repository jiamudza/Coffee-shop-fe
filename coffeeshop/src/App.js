import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import Login from "./pages/auth/login";
import LandingPage from "./pages/landingPage";
import RestrictedRoute from "./routes/restrictedRoutes";
import Restricted from "./pages/restrictedPage";
import Product from "./pages/product";
import ProductDetail from "./pages/productDetail";
import Payment from "./pages/payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/restricted" element={<PrivateRoutes><Restricted /></PrivateRoutes>} />
        <Route path="/login" element={<RestrictedRoute><Login /></RestrictedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
