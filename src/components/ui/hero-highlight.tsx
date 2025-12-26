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
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)",
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
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
      },
      {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      }
    );
  }, [animate, delay]);

  return (
    <motion.div
      ref={scope}
      className={cn(
        "z-20 inline-block w-fit",
        className
      )}
    >
      <motion.span
        style={{
          opacity: 0,
          width: 0,
          display: 'inline-block',
        }}
        className={`z-20 inline-block bg-primary/20 px-2 py-0.5`}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};
