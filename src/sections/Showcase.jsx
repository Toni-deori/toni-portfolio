import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const eyewearMIS = useRef(null);
  const accidentDetect = useRef(null);
  const vibe = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    const cards = [eyewearMIS.current, accidentDetect.current, vibe.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
        }
      );
    });
  }, []);

  return (
    
    <div id="work" ref={sectionRef} className="app-showcase">
        
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={eyewearMIS} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/watch.png" alt="eyewear and watch MIS" />
            </div>
            <div className="text-content">
              <h2>
              Eyewear and watches MIS
              </h2>
              <p className="text-white-50 md:text-xl">
              A desktop application built with Visual Basic to manage inventory, product details, and sales operations for eyewear and watch stores. Features include intuitive dashboards, role-based admin/clerk access, product and sales tracking, and easy reporting.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={accidentDetect}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/accident.jpg"
                  alt="Accident detection system"
                />
              </div>
              <h2>Accident Detection System</h2>
            </div>

            <div className="project" ref={vibe}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/VIBE.png" alt="VIBE" />
              </div>
              <h2>Visually Impaired Browser Enhancement(VIBE)</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
