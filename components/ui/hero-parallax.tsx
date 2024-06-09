"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "./text-generate-effect";

export const HeroParallax = ({
  products,
}: {
  products: {
    id: string;
    title: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setContainerHeight(ref.current.scrollHeight);
    }
  }, [products]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, -100]),
    springConfig
  );
  return (
    <div
      style={{
        background:
          "linear-gradient(-45deg, #ff9a9e, #fecfef, #fe9a8b, #ffdde1)",
      }}
      ref={ref}
      className="pt-20 sm:pt-24 lg:pt-28 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10 lg:mb-16 xl:mb-20 lg:space-x-16 xl:space-x-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 space-x-10 lg:space-x-16 xl:space-x-20 lg:mb-16 xl:mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 lg:space-x-16 xl:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl font-serif relative mx-auto py-5 sm:py-8 md:py-12 lg:py-20 px-4 w-full left-0 top-0">
      <h1 className="text-2xl py-3 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center gradient-text font-bold dark:text-white">
        Simplify Your Healthcare Journey <br /> with Effortless Online Booking
      </h1>

      <TextGenerateEffect
        words="Discover the convenience of managing your healthcare appointments
        online. Our platform seamlessly connects you with top healthcare
        providers, ensuring timely and efficient care. Enjoy a stress-free
        experience with our intuitive and reliable service, designed to
        prioritize your well-being. Whether you need a routine check-up or
        specialist consultation, our easy-to-use system ensures you find the
        right care, at the right time, with minimal effort. Trust us to handle
        the logistics so you can focus on your health."
      />
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    id: string;
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-[150px] w-[200px] sm:h-[230px] sm:w-[250px] md:h-[280px] md:w-[300px] lg:h-[320px] lg:w-[420px] xl:w-[30rem] xl:h-96 relative flex-shrink-0">
      <Image
        src={product.thumbnail}
        sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
        fill
        style={{ objectFit: "cover" }}
        className="object-left-top absolute h-[150px] w-[100px] sm:h-[200px] sm:w-[160px] md:h-[250px] md:w-[220px] lg:h-[320px] lg:w-[270px] xl:h-full xl:w-full inset-0"
        alt={product.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
