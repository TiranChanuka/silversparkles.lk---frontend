import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="">
      {/* top */}
      <div className="Outfit flex justify-between px-[5px] md:px-[50px] py-2 bg-[#0A6550] text-white text-[10px] md:text-[15px]">
        {/* left */}
        <div>
          <span>011 2345 678</span>
        </div>
        {/* right */}
        <div>
          <span>1 Galle Face, Colombo 2, Sri Lanka</span>
        </div>
      </div>

      {/* bottom */}
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
