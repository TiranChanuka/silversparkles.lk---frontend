import { motion } from "framer-motion";
import ClientCard from "../../Components/Client Card/ClientCard";
import { clients } from "../../Components/Client Card/ClientData";

const Section9 = () => {
  return (
    <div className=" m-3 md:mt-10">
      {/* title */}
      <div className=" md:block hidden absolute z-[-999]"></div>

      <div className="mb-[20px] md:pl-[50px]">
        <motion.span
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="Poppins text-[40px] uppercase text-black font-[700] flex items-center justify-center md:justify-start"
        >
          our clients
        </motion.span>
      </div>

      {/* clients */}

      {/* 1 */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-center items-center"
      >
        {clients.map((item) => (
          <ClientCard item={item} key={item.id} />
        ))}
      </motion.div>
    </div>
  );
};

export default Section9;
