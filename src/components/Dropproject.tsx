"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Projects",
      description:
        "Capture stunning photos effortlessly using our advanced AI technology.",
      skeleton: <SkeletonTwo />,
      className: "font-[Michroma] text-3xl text-center ",
    },
  ];
  return (
    <div className="relative z-20 py-5 lg:py-5 max-w-7xl lg:w-8xl mx-auto -top-24">
      <div className="px-8"></div>

      <div className="relative ">
        <div className=" mt-0  rounded-md ">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              {/* <FeatureDescription>{feature.description}</FeatureDescription> */}
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-8xl mx-auto text-left tracking-tight font-semibold md:text-3xl md:leading-snug">
      {children}
    </p>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/sumit_project/auditions_starting_soon.png",
    "/sumit_project/loot_legacy_post.png",
    "/sumit_project/quiz_cometition.png",
    "/sumit_project/recruitment_poster.png",
    "/sumit_project/chanakya_x_techwhiz.png",
    "/sumit_project/TecWhiz_ core_team.png",
    "/sumit_project/techwhiz.png",
  ];
  const photo = [
    "/sumit_project/recruitment_poster.png",
    "/sumit_project/quiz_cometition.png",
    "/sumit_project/auditions_starting_soon.png",
    "/sumit_project/loot_legacy_post.png",
    "/sumit_project/chanakya_x_techwhiz.png",
    "/sumit_project/TecWhiz_ core_team.png",
    "/sumit_project/techwhiz.png",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-14">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-2 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row -ml-10">
        {photo.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 p-1 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20  dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20  from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};
