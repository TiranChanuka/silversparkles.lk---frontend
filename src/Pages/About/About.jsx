/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import Section9 from "../Home/Section9";
import shamran from "../../assets/client/shane.jpg"

const About = () => {
    return (
        <>
            <div className="AboutSection Poppins h-[60vh] flex flex-col justify-center md:items-center  items-center  m-3 md:mt-10">
                {/* text */}
                <div className="flex md:justify- text-center  flex-col md:flex-row w-[100%] ">
                    <div className="w-full">
                        <motion.span
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="uppercase text-white text-[30px] md:text-[50px] font-[700]"
                        >
                            <h1 className="uppercase font-bold">ABOUT US!! </h1>
                            <h3 className="text-xl font-semibold">Silver Sparkles Jewellery - Quality Custom Jewellery  </h3>
                        </motion.span>
                    </div>
                </div>
            </div>
            <div className="md:mt-5 bg-[#2a2a2a] text-white lg:p-10">
                <div className="container lg:max-w-[1024px] mx-auto p-5">
                    <p className="">
                        Silver Sparkles Jewellery is a leading provider of high-quality silver jewellery. Founded with a
                        passion for creating quality , timeless pieces that can be worn and cherished for years to come,
                        our brand is dedicated to producing jewellery that is both stunning and affordable.Our collection features a wide range of styles, from classic and understated to bold and
                        glamorous. Whether you are looking for a delicate necklace, a statement ring, or a pair of elegant
                        earrings, we have something to suit every taste and occasion.

                    </p>
                    <p className=" hidden md:block mt-5">
                        At Silver Sparkles Jewellery, we pride ourselves on our commitment to quality and customer
                        satisfaction. All of our pieces are made from high-quality materials and crafted with care and
                        attention to detail. We believe that every piece of jewellery should be as unique and special as the
                        person who wears it, and we are dedicated to helping our customers find the perfect piece to
                        express their individual style and personality. Thank you for choosing Silver Sparkles Jewellery,
                        we look forward to helping you sparkle and shine with our beautiful pieces!
                    </p>
                </div>

            </div>
            <Row className="flex justify-center items-center my-5">
                <Col xs={24} sm={24} md={12} className="flex justify-center items-center">
                    <motion.div className="text-center p-5 Outfit md:p-10" initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}>
                        <h1 className=" text-[30px] font-bold">Mission</h1>
                        <p className="lg:text-lg">Our mission is to provide men with the highest quality, unique and timeless jewelry
                            pieces that enhance their personal style and confidence. We strive to create a
                            luxurious and exclusive shopping experience for our customers, through attention
                            to detail.</p>
                    </motion.div>
                </Col>
                <Col xs={24} sm={24} md={12} className="flex justify-center items-center">
                    <motion.div className="text-center p-5 md:p-10 Outfit" initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <h1 className=" text-[30px] font-bold ">Vision</h1>
                        <p className="lg:text-lg"> Our vision is to be the go-to destination for men seeking the finest, most stylish and
                            sophisticated jewelry. We strive to constantly push the boundaries of design and
                            craftsmanship, offering our customers exclusive and innovative collections.</p>
                    </motion.div>
                </Col>
            </Row>
            <div className="bg-[#2a2a2a] text-white">
                <div className="flex flex-col md:flex-row justify-center items-center p-10">
                    <div className="w-3/6 flex justify-center items-center">
                        <img src={shamran} alt="" width={300} className="rounded-md" />
                    </div>
                    <div className="w-full">
                        <div className="pb-[20px]">
                            <motion.h1
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="Poppins uppercase text-[35px] font-[700]"
                            >
                                Founder
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="Mont capitalize text-[20px] font-[500]"
                            >
                                Shamran Zacky
                            </motion.p>
                        </div>

                        <p>Shamran Zacky Jeweller is a prominent jeweller specializing in creating iced out jewellery. With a
                            passion for creating bold and unique pieces, our brand is dedicated to providing our clients with
                            the highest quality, most dazzling jewellery.</p>
                        <p className="hidden md:block mt-2"> Our collection features an extensive range of iced out jewellery, from necklaces and pendants to
                            bracelets, rings, and earrings. Each piece is expertly crafted with precision and care to create an
                            unforgettable sparkle. Shamran Zacky Jeweller, committed to using only the finest quality
                            materials, including precious metals as in silver, white gold, gold and genuine high-quality gem
                            stones and diamonds, to ensure that our clients receive the very best in luxury jewellery. Our
                            designs are inspired by the latest trends and are constantly evolving to reflect the changing styles
                            and tastes of our clients.</p>
                    </div>
                </div>
            </div>
            <Section9 />
        </>
    );
};

export default About;