"use client";
import { cn } from "@/lib/utils";
import { useAnimate, motion } from "framer-motion";
import React, { useEffect } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let [isAnimating, setIsAnimating] = React.useState(false);

  return (
    <div
      className={cn(
        "group/highlight relative h-full w-full",
        containerClassName
      )}
      onMouseEnter={() => {
        setIsAnimating(true);
      }}
      onMouseLeave={() => {
        setIsAnimating(false);
      }}
    >
      <div className="pointer-events-none absolute inset-0 md:block" />
      {isAnimating && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="pointer-events-none absolute inset-0 md:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 80%)",
          }}
        />
      )}

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 0.5,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-primary/20 to-primary/5`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
