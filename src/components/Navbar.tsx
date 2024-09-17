import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-[#EE1702] max-w-7xl mx-auto w-full my-7 rounded-2xl ">
      <div className="md:hidden"></div>
      <div className="flex justify-between p-4 mx-auto">
        <div className="text-left text-balance font-[Michroma] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white ml-5 hover:bg-[#FF8A00] hover:px-2 hover:rounded-xl hover:text-black py-auto">
          <Link href={"/"}>SUMIT SINGH BISHT</Link>
        </div>
        <div className="mr-7">
          <ul className="flex gap-10">
            <li>
              <Link
                href={"/projects"}
                className="mt-4 text-left  text-base/6 text-neutral-200 font-[Michroma] md:text-xl lg:text-2xl"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="mt-4 text-left  text-base/6 text-neutral-200 font-[Michroma] md:text-xl lg:text-2xl"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
