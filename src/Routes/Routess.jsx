import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Checkout from "../Pages/Checkout/Checkout";
import Cart from "../Pages/Cart/Cart";
import PageNotFound from "../Pages/404/PageNotFound";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Product from "../Pages/Product/Product";
import Contact from "../Pages/Contact/Contact";
import PrivacyPolicy from "../Pages/Privacy Policy/PrivacyPolicy";
import TermsAndConditions from "../Pages/Terms and Conditions/TermsAndConditions";
import LoginForm from "../Pages/Login/Login";
import RegisterForm from './../Pages/Login/Register';
import HandleAuthRoute from "../auth/HandleAuthRoute";
import About from "../Pages/About/About";
const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop/:id" element={<Shop />} />
      <Route path="checkout" element={
        <HandleAuthRoute>
          <Checkout />
        </HandleAuthRoute>
      } />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-of-services" element={<TermsAndConditions />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default Routess;
