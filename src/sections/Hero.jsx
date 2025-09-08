import React,{ useLayoutEffect } from 'react'
import Button from '../components/Button';
import ThreeD from '../components/ThreeD';
// import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const Hero = () => {


   useLayoutEffect(() => {
    gsap.set('.hero-text h1', { y: 50, opacity: 0 });
    gsap.to('.hero-text h1', {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, []);

  
  return (
    <>
      <section id='hero' className='relative overflow-hidden'>
        <div className='absolute x-0 top-0 z-10'>
          <img src="bg.png" style={{width: '100%'}}></img>
        </div>
        <div className='hero-layout'>
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
              Transforming
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>with Lasting Impact.</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none w-4/5 md:w-2/5">
            Motivated fresher skilled in JavaScript, web development, and building innovative accessibility-focused projects.
            </p>
            <Button
              text="Get Started"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />

          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <ThreeD />
          </div>
        </figure>
        </div>
      </section>
    </>
  )
}

export default Hero
