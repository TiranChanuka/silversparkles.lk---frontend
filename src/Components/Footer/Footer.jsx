import PostPay from "../../assets/postepay.png";
import WireCard from "../../assets/wirecard.png";
import Worldpay from "../../assets/worldpay.png";
import Unionpay from "../../assets/unionpay.png";
import Maestro from "../../assets/maestro.png";
import Cr from "../../assets/cr.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link, NavLink } from "react-router-dom";
import LogoWhite from "../../assets/logoB.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      {/* contents */}
      <div className="flex flex-col gap-[50px] ">
        {/* section 1 */}
        <div>
          <div className="flex flex-col md:flex-row gap-[20px] items-center px-[100px] pt-[20px]">
            <NavLink to={"/"} className="cursor-pointer">
              <img src={LogoWhite} alt="Logo" className=" w-[100%]" />
            </NavLink>
          </div>
        </div>

        {/* section 2 */}


        {/* section 2 */}
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-0 items-center md:items-start text-center md:text-left  md:justify-between px-[100px]">
          {/*item 1  */}
          <div>
            <div className="Outfit flex flex-col text-black font-[500] gap-[5px]">
              <div className="flex flex-col">
                <span>1 GALLEFACE,</span>
                <span>COLOMBO 2,</span>
                <span>SRI LANKA,</span>
              </div>

              <div className="flex flex-col">
                <span>011 2345 678</span>
                <span>contact@goldhouse.com</span>
              </div>
            </div>
          </div>

          {/* item 2 */}
          <div>
            <div className="flex flex-col">
              {/* topic */}
              <h1 className="Poppins text-2xl font-bold text-black mb-2">
                Quick Links
              </h1>
              <div className="Outfit flex flex-col text-black gap-[10px]">
                <span className="linkFooter">All Jewellery</span>
                <span className="linkFooter">New Drops</span>
                <span className="linkFooter">Collabs</span>
                <span className="linkFooter">Customized</span>
                <span className="linkFooter">Womens</span>
                <span className="linkFooter">Mens</span>
                <span className="linkFooter">Solid gold</span>
                <span className="linkFooter">Chains</span>
                <span className="linkFooter">Watches</span>
              </div>
            </div>
          </div>

          {/* item 3 */}
          <div>
            <div className="flex flex-col">
              {/* topic */}
              <h1 className="Poppins text-2xl font-bold text-black mb-2">
                Help
              </h1>
              <div className="Outfit flex flex-col text-black gap-[10px]">
                <span className="linkFooter">Bracelets Size Guides</span>
                <span className="linkFooter">Ring Size Guides</span>
                <span className="linkFooter">Chain Size Guides</span>
                <span className="linkFooter">Initiate A Return</span>
                <span className="linkFooter">Warranty</span>
                <Link to={"/terms-of-services"} className="linkFooter">
                  Terms Of Services
                </Link>
                <Link to={"/privacy-policy"} className="linkFooter">
                  Privacy Policy
                </Link>
                <Link to={"/contact-us"} className="linkFooter">
                  Contact Us
                </Link>
                <Link to={"/about"} className="linkFooter">About Us</Link>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-[100px] px-[100px]">
          {/* left */}
          <div className="Poppins text-[30px] md:text-left text-center text-black font-[700]">
            <h1>Shop With Us</h1>
          </div>
          {/* right */}
          <div className="flex gap-[50px] flex-wrap items-center justify-center">
            <img src={PostPay} alt="postpay" className="w-[50px]" />
            <img src={WireCard} alt="wirecard" className="w-[50px]" />
            <img src={Worldpay} alt="worldpay" className="w-[50px]" />
            <img src={Unionpay} alt="unionpay" className="w-[50px]" />
            <img src={Cr} alt="cr" className="w-[50px] bg-white rounded-full" />
            <img src={Maestro} alt="ma" className="w-[50px] rounded-full" />
          </div>
        </div>

        {/* section 4 */}
        <div className="flex flex-col md:flex-row px-[100px] gap-[20px] text-black">
          {/* left */}
          <div className="Poppins text-[18px] text-center md:text-left font-[500]">
            <h1>Follow us</h1>
          </div>
          {/* right */}
          <div className="flex justify-center gap-[20px] text-[#0a6550]">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <PinterestIcon />
          </div>
        </div>

        {/* section 5 */}
        <div className="Outfit bg-[#0a6550] p-2 flex text-white justify-center items-center text-sm">
          <div>
            Copyright © {currentYear} Silver Sparkles.
            Developed By{" "}
            <a href="https://www.facebook.com/profile.php?id=61552963943151&mibextid=ZbWKwL" className=" font-medium">CodeScape labs & Solution </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
