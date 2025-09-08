import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
  useProgress
} from "@react-three/drei";
import { technologies } from "../components/constant";

// Inline styles and motion variants
const styles = {
  padding: "sm:px-16 px-6 sm:py-16 py-10",
};

const staggerContainer = (staggerChildren = 0.2, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const textVariant = (delay = 0) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.5) => {
  const x = direction === "left" ? 100 : direction === "right" ? -100 : 0;
  const y = direction === "up" ? 100 : direction === "down" ? -100 : 0;
  return {
    hidden: { x, y, opacity: 0 },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

// Wrapper that applies stagger and padding
const TechWrapper = (Component, idName) => () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    id={idName}
  >
    <Component />
  </motion.section>
);

const CanvasLoader = () => {
  const { progress } = useProgress();
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const textStyle = {
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: 800,
    marginTop: 40,
  };
  return (
    <Html as="div" center style={containerStyle}>
      <span className="canvas-loader" />
      <p style={textStyle}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

const Ball = React.memo(({ iconUrl }) => {
  const [decal] = useTexture([iconUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
});

const BallCanvas = ({ icon }) => (
  <Canvas
    frameloop="demand"
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true, alpha: true }}
    style={{ background: "transparent" }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      <Ball iconUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);

const TechStack = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map(({ name, icon }, index) => (
      <motion.div
        key={name}
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      >
        <div className="w-28 h-28">
          <BallCanvas icon={icon} />
        </div>
      </motion.div>
    ))}
  </div>
);

export default TechWrapper(TechStack, "tech");
