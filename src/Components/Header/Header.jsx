import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="">
      {/* top */}
      <div className="Outfit flex justify-between px-[5px] md:px-[50px] py-2 bg-[#0A6550] text-white text-[10px] md:text-[15px]">
        {/* left */}
        <div>
          <span>0778884033 | 0112555515</span>
        </div>
        {/* right */}
        <div>
          <span>No 30, Dr Lester James Peiris Mawatha, Colombo 5 </span>
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