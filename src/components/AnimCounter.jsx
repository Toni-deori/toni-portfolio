import { useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt"; 
import { services } from "./constant";

const AnimCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <Tilt
            key={index}
            className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-none"
            options={{ max: 45, scale: 1, speed: 500 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="shadow-card p-[2px] py-5 card-gradient-border rounded-[20px] w-full"
              ref={(el) => el && (countersRef.current[index] = el)}
            >
              <div className="rounded-[18px] py-6 px-4 sm:py-8 sm:px-6 min-h-[320px] flex flex-col justify-center items-center">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-16 h-16 object-contain mb-4" 
                  loading="lazy" 
                />
                <h3 className="text-white text-base sm:text-lg font-semibold text-center leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default AnimCounter;
