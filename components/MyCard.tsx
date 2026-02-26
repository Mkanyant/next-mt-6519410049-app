"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { Noto_Sans_Bengali } from "next/font/google";

import Profile from "@/assets/images/Profile.png";

const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
});

export default function MyCard() {
  return (
    <div className="w-[320px] bg-black border border-[#2a2a2e] rounded-[20px] p-6 shadow-xl">
      
      <h2 className="text-[25px] tracking-wide text-white mb-1">
        <span className="text-[#ff3c00]">K</span>anyanat
      </h2>

      <div className="rounded-[16px] overflow-hidden">
        <Image src={Profile} alt="profile" width={280} height={280} />
      </div>

      <p className="mt-1 text-[18px] text-[#cfcfd4] text-center">
        STU ID: 6519410049
      </p>

      <p className="text-[13px] text-[#9a9a9f] text-center">
        Fullstack Web Developer
      </p>

      <div className="flex justify-center gap-6 mt-6 text-[26px] text-[#d4d4d8]">
        <a
          href="https://www.facebook.com/mint.kanyanat.52/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff3c00] transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://github.com/Mkanyant"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff3c00] transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff3c00] transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff3c00] transition"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:love.0936508377@gmail.com"
          className="hover:text-[#ff3c00] transition"
        >
          <FaGoogle />
        </a>
      </div>

      <button
        className={`${bengali.className} mt-10 w-full bg-[#ff6a00] hover:bg-[#ff3c00] transition rounded-[12px] py-3 text-black font-semibold tracking-wider`}
      >
        HIRE ME !
      </button>
    </div>
  );
}