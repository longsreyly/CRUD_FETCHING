import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const AnimationComponent = () => {
        useEffect(() => {
            Aos.init({
              duration: 800,
              once: false, // Customize this based on your need
            });
          }, []);
}
export default AnimationComponent;