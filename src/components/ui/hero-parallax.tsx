"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Desktop translations (full effect)
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  // Mobile translations (reduced effect for better UX)
  const translateXMobile = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 300]),
    springConfig
  );
  const translateXReverseMobile = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -300]),
    springConfig
  );

  // 3D rotation effects (reduced on mobile)
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const rotateXMobile = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [5, 0]),
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
  const rotateZMobile = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [8, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 200]),
    springConfig
  );
  const translateYMobile = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-200, 100]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[120vh] sm:h-[100vh] md:h-[150vh] lg:h-[220vh] py-6 overflow-hidden bg-white dark:bg-black antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      {/* Desktop and Tablet View (md and up) */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="hidden md:block"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 lg:space-x-16 mb-12 lg:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 lg:mb-20 space-x-8 lg:space-x-16">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Mobile View (below md) */}
      <motion.div
        style={{
          rotateX: rotateXMobile,
          rotateZ: rotateZMobile,
          translateY: translateYMobile,
          opacity,
        }}
        className="block md:hidden"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 sm:space-x-4 mb-6 sm:mb-8">
          {firstRow.slice(0, 3).map((product) => (
            <ProductCard
              product={product}
              translate={translateXMobile}
              key={product.title}
              isMobile
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-6 sm:mb-8 space-x-2 sm:space-x-4">
          {secondRow.slice(0, 3).map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverseMobile}
              key={product.title}
              isMobile
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-4 sm:py-8 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 w-full left-0 top-0 mb-6 sm:mb-10 md:mb-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold dark:text-white leading-tight">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 md:mt-8 dark:text-neutral-200 text-neutral-600 leading-relaxed">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  isMobile = false,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  isMobile?: boolean;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: isMobile ? -10 : -20,
      }}
      key={product.title}
      className={`group/product relative flex-shrink-0 ${
        isMobile
          ? "h-40 w-40 sm:h-52 sm:w-52"
          : "h-72 w-80 md:h-80 md:w-96 lg:h-96 lg:w-[28rem]"
      }`}
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl rounded-lg overflow-hidden h-full w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center h-full w-full rounded-lg"
          alt={product.title}
          loading="lazy"
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg transition-opacity duration-300"></div>
      <h2
        className={`absolute bottom-3 left-3 sm:bottom-4 sm:left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold transition-opacity duration-300 ${
          isMobile ? "text-sm sm:text-base" : "text-base md:text-lg"
        }`}
      >
        {product.title}
      </h2>
    </motion.div>
  );
};
