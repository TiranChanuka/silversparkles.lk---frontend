import ReactPlayer from "react-player"
import YouTubePlayer from "react-player/youtube"
import { motion } from "framer-motion";


const VideoSection = () => {
    return (
        <>
            <div className="mb-[20px] md:pl-[50px] md:mt-10">
                <motion.span
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="Poppins text-[40px] uppercase text-black font-[700] flex items-center justify-center md:justify-start"
                >
                    Showcase
                </motion.span>
            </div>
            <div className="m-3 md:mt-10 flex justify-center ">
                <ReactPlayer url='https://youtu.be/KhvRKKNeGsk?si=Qjgviq0_QBIxid1T' controls={true} config={YouTubePlayer} />


            </div>
        </>
    )
}

export default VideoSection