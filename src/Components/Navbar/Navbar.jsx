import { useState, useEffect } from "react";
import { Menu, Dropdown } from "antd";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import LogoWhite from "../../assets/logo/logow.png";
import LoginForm from './../../Pages/Login/Login';
import RegisterForm from "../../Pages/Login/Register";
import ForgetPasswordForm from "../../Pages/Login/ForgetPassword";
import { ProductFilterContext } from "../../Contexts/ProductFilterContext";
import { useContext } from "react";

// cookie library
import Cookies from 'js-cookie';

const Navbar = () => {
  const { setCategoryFilter, setGender } = useContext(ProductFilterContext);
  // get current url to view product page if it is not in the product page 
  const currentUrl = window.location.pathname;
  console.log("Current URL : ", currentUrl);

  const sx = {
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: "#0A6550"
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showForgetPasswordForm, setShowForgetPasswordForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = Cookies.get('token');
    const storedUsername = Cookies.get('username');
    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
    setShowForgetPasswordForm(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
    setShowForgetPasswordForm(false);
  };

  const handleForgetPasswordClick = () => {
    setShowForgetPasswordForm(true);
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  const closeRegisterForm = () => {
    setShowRegisterForm(false);
  };

  const closeForgetPasswordForm = () => {
    setShowForgetPasswordForm(false);
  };

  const handleLogout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('username');
    // clear cookie data 
    Cookies.remove('token');
    Cookies.remove('userId');
    setIsLoggedIn(false);
    setUsername("");
  };

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    setShowLoginForm(false);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Welcome, {username}!</Menu.Item>
      <Menu.Item key="2" onClick={handleLogout}><button className="textButton w-full p-1">Logout</button></Menu.Item>
    </Menu>
  );

  return (
    <div className="Outfit bg-black items-center px-[20px] md:px-[50px]">
      <div className="flex justify-between text-white items-center ">
        <NavLink to={"/"} className="cursor-pointer p-5">
          <img src={LogoWhite} width={200} alt="Logo" />
        </NavLink>
        <div className="flex gap-[10px] items-center">
          {/* <div className="cursor-pointer">
            <SearchIcon style={{ fontSize: 30 }} />
          </div> */}
          <div className="relative">
            {isLoggedIn ? (
              <Dropdown overlay={userMenu} placement="bottomRight"
                trigger={['click']}
                arrow={{ pointAtCenter: true }}>
                <div className="cursor-pointer">
                  <PersonIcon style={{ fontSize: 30 }} />
                </div>
              </Dropdown>
            ) : (
              <div className="cursor-pointer" onClick={handleLoginClick}>
                <PersonIcon style={{ fontSize: 30 }} />
              </div>
            )}
          </div>
          {isLoggedIn ? (
            <div>
              <Link to={"/wishlist"} className="cursor-pointer">
                <Badge badgeContent={3} sx={sx}>
                  <FaHeart style={{ fontSize: 25 }} />
                </Badge>
              </Link>

              <Link to={"/cart"} className="cursor-pointer">
                <Badge badgeContent={4} sx={sx}>
                  <ShoppingCartIcon style={{ fontSize: 30 }} />
                </Badge>
              </Link>
            </div>

          ) : ""}





        </div>
      </div>
      <div className="bg-black text-white py-[10px] relative">
        {menuOpen ? (
          <div
            className="text-white flex justify-end md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon style={{ fontSize: 35 }} />
          </div>
        ) : (
          <div
            className="text-white flex justify-end md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon style={{ fontSize: 35 }} />
          </div>
        )}
        <div className="md:flex hidden items-center justify-between ">
          <NavLink to={"/shop/1"} className="link" onClick={() => { setCategoryFilter('all'); setGender('') }}>
            All Jewellery
          </NavLink>
          {/* <NavLink className="link">New Drops</NavLink> */}
          <NavLink to={currentUrl !== "/shop/1" ? "/shop/1" : currentUrl} className="link" onClick={() => setCategoryFilter('chains')}>Chains</NavLink>
          <NavLink to={currentUrl !== "/shop/1" ? "/shop/1" : currentUrl} className="link" onClick={() => setGender('women')}>Women</NavLink>
          <NavLink to={currentUrl !== "/shop/1" ? "/shop/1" : currentUrl} className="link" onClick={() => setCategoryFilter('collabs')}>Collabs</NavLink>
          <NavLink to={currentUrl !== "/shop/1" ? "/shop/1" : currentUrl} className="link" onClick={() => setCategoryFilter('watches')}>Watches</NavLink>
          {/* <NavLink className="link">Solid gold</NavLink> */}
          <NavLink to={currentUrl !== "/shop/1" ? "/shop/1" : currentUrl} className="link" onClick={() => setCategoryFilter('custom')}>Customized</NavLink>
          <NavLink to={currentUrl !== "/shop/1" ? "/shop/1" : currentUrl} className="link" onClick={() => setGender('men')}>Mens</NavLink>
        </div>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, width: 0, x: -200 }}
            animate={{ opacity: 1, width: "100vw", x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex md:hidden flex-col absolute z-[5000] bg-black w-[100vw] items-center gap-[20px] text-[20px] pt-[20px] h-[100vh]"
          >
            <NavLink
              to={"/shop/1"}
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              All Jewellery
            </NavLink>
            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              New Drops
            </NavLink>
            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Chains
            </NavLink>
            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Womens
            </NavLink>
            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Collabs
            </NavLink>
            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Watches
            </NavLink>
            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Solid gold
            </NavLink>
            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Customized
            </NavLink>
            <NavLink className="link" onClick={() => setMenuOpen(false)}>
              Mens
            </NavLink>
          </motion.div>
        )}
      </div>
      {showLoginForm && <LoginForm closeLoginForm={closeLoginForm} openRegisterForm={handleRegisterClick} onLoginSuccess={handleLoginSuccess} openForgetPasswordForm={handleForgetPasswordClick} />}
      {showRegisterForm && <RegisterForm closeRegisterForm={closeRegisterForm} />}
      {showForgetPasswordForm && <ForgetPasswordForm closeForgetPasswordForm={closeForgetPasswordForm} />}
    </div>
  );
};

export default Navbar;
