"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Link from "next/link";
import { FeaturesSectionDemo } from "./Dropproject";

export function Mainbody() {
  return (
    <main className="grid grid-cols-1 grid-rows-1 lg:grid-rows-8 lg:grid-cols-12 gap-4 max-w-7xl mx-auto w-full h-[80vh]">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-5 lg:row-span-5"
        className="bg-[#FF4533] py-12"
      >
        <h1 className="text-[3rem] font-[Michroma]">
          “A graphic designer creates social media posts.”
        </h1>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 lg:row-span-5"
        className="bg-[#A24501]"
      >
        <Image
          src={"/file.png"}
          height={350}
          width={350}
          alt={"file"}
          className="absolute left-0 filter -bottom-5 object-contain rounded-2xl"
        ></Image>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-4 lg:row-span-7 w-auto lg:w-full"
        className="bg-[#C70101]"
      >
        <FeaturesSectionDemo />
        <Link href={"/projects"}>
          <Image
            src={"/arrow.png"}
            alt={"arrow"}
            height={35}
            width={35}
            className="absolute z-20 top-10 right-7"
          ></Image>
        </Link>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-4 lg:row-span-3"
        className="bg-[#FC5241] py-7"
      >
        <h1 className="font-[Michroma]">
          Sumit Singh Bisht is a passionate graphic designer known for his
          creative designs and captivating illustrations. His unique artistic
          vision and dedication to excellence make his work truly stand out.
        </h1>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-4 lg:row-span-3"
        className="bg-[#FF8A00] relative -top-14 h-auto"
      >
        <div className="flex justify-between">
          <p className="font-[Michroma]">Have some questions?</p>
          <Link href={"/contact"} className="z-10">
            <Image
              src={"/arrow.png"}
              alt={"arrow"}
              width={38}
              height={38}
            ></Image>
          </Link>
        </div>
        <h1 className="font-[Michroma] text-4xl mt-24">Contact me</h1>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-4 lg:row-span-1"
        className="bg-[#FF6657] h-auto"
      >
        <div className="flex justify-evenly">
          <Link href={"/SUMIT_SINGH_BISHT.pdf"} rel="noopener noreferrer" target="_blank">
          <div>
          <Image
            src={"/download.png"}
            alt="download"
            height={35}
            width={35}
            className="absolute top-3 left-20 z-20"
            
          ></Image>
            <h1 className="font-[Michroma] z-20 text-3xl absolute top-3 right-20 ">
              RESUME
            </h1>
          </div>
          </Link>
        </div>
      </WobbleCard>
    </main>
  );
}
