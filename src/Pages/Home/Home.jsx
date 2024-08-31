import ImgSlider from "./ImgSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import NewsLetter from "../../Components/News Letter/NewsLetter";
import VideoSection from "./VideoSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* top section */}
      <ImgSlider />

      {/* section 2 */}
      <Section2 />

      {/* section 3 */}
      <Section3 />

      {/* section 4 */}
      <Section4 />

      {/* section 5 */}
      <Section5 />

      {/* section 6 */}
      <Section6 />

      {/* section 7 */}
      <Section7 />

      {/* section 8 */}
      <Section8 />

      {/* section 9 */}
      <Section9 />

      {/* Video Section */}
      <VideoSection />

      {/* news letter */}
      <NewsLetter />
    </div>
  );
};

export default Home;
