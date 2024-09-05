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
import LogoWhite from "../../assets/logo/logob.png";
import JemLogo from "../../assets/logo/jemlogo.png"
import { FaTiktok } from "react-icons/fa6";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer pt-10">
      {/* contents */}
      <div className="flex flex-col gap-[10px] ">


        {/* section 2 */}


        {/* section 2 */}
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-0 items-center md:items-start text-center md:text-left  md:justify-between px-[100px]">

          {/*item 1  */}
          <div>
            <div className="Outfit flex flex-col text-black font-[500] gap-[5px]">
              {/* section 1 */}
              <div>
                <div className="flex flex-col md:flex-row gap-[20px] items-center">
                  <NavLink to={"/"} className="cursor-pointer">
                    <img src={LogoWhite} width={250} alt="Logo" />
                  </NavLink>
                </div>
              </div>
              <div className="flex flex-col">
                <span>No 30,  </span>
                <span>Dr Lester James Peiris Mawatha,</span>
                <span>Colombo 5,</span>
                <span>Sri Lanka,</span>
              </div>

              <div className="flex flex-col">
                <span>0778884033</span>
                <span>0112555515</span>
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
                Information
              </h1>
              <div className="Outfit flex flex-col text-black gap-[10px]">
                <span className="linkFooter">SS Bling Gang</span>
                <Link to={"/about"} className="linkFooter">About Us</Link>
                <span className="linkFooter">Custom order</span>
                <span className="linkFooter">Membership</span>
              </div>
            </div>
          </div>

          {/* item 4 */}
          <div>
            <div className="flex flex-col">
              {/* topic */}
              <h1 className="Poppins text-2xl font-bold text-black mb-2">
                Help
              </h1>
              <div className="Outfit flex flex-col text-black gap-[10px]">
                <Link to={"/contact-us"} className="linkFooter">
                  Contact Us
                </Link>
                <span className="linkFooter">Return Policy</span>
                <span className="linkFooter">Warranty</span>
                <span className="linkFooter">Ring Size Guide</span>
                <span className="linkFooter">Bracelet Size Guide </span>
                <span className="linkFooter">Chain Size Guide</span>
                <Link to={"/terms-of-services"} className="linkFooter">
                  Terms Of Services
                </Link>
                <Link to={"/privacy-policy"} className="linkFooter">
                  Privacy Policy
                </Link>


              </div>
            </div>
          </div>

          {/* item 4 */}
          <div>
            <div className="flex flex-col">
              {/* topic */}
              <h1 className="Poppins text-2xl font-bold text-black mb-2">
                Shop With Us
              </h1>
              <div className="Outfit text-black  space-y-5">
                <div className="flex justify-between">
                  <img src={PostPay} alt="postpay" className="w-[50px]" />
                  <img src={WireCard} alt="wirecard" className="w-[50px]" />
                </div>
                <div className="flex justify-between">
                  <img src={Worldpay} alt="worldpay" className="w-[50px]" />
                  <img src={Unionpay} alt="unionpay" className="w-[50px]" />
                </div>
                <div className="flex justify-between">
                  <img src={Cr} alt="cr" className="w-[50px] bg-white rounded-full" />
                  <img src={Maestro} alt="ma" className="w-[50px] rounded-full" />
                </div>
              </div>
            </div>
          </div>


        </div>
        {/* section 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[10px] px-[100px]">
          {/* left */}
          <div className="Poppins text-[20px] md:text-left text-center text-black font-[700]">
            <h1>SLGJA Authorized </h1>
          </div>
          {/* right */}
          <img src={JemLogo} alt="postpay" className="w-[100px]" />
        </div>




        {/* section 5 */}
        <div className="flex flex-col md:flex-row px-[100px] gap-[20px] text-black justify-center">
          {/* left */}
          <div className="Poppins text-[18px] text-center md:text-left font-[500]">
            <h1>Follow us</h1>
          </div>
          {/* right */}
          <div className="flex justify-center gap-[20px] text-[#0a6550]">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <FaTiktok size={20} />
          </div>
        </div>

        {/* section 6 */}
        <div className="Outfit bg-[#0a6550] p-4 flex text-white justify-center items-center text-sm mt-5">
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