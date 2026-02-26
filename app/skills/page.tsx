"use client";

import React from "react";
import {
  Atom,
  Figma,
  BadgeCheck,
  Github,
} from "lucide-react";
import { SiNextdotjs, SiJavascript } from "react-icons/si";

export default function Skills() {
  return (
    <>
      {/* Title */}
      <h1 className="text-[40px] font-semibold tracking-wide mt-5">
        My{" "}
        <span className="text-[#ff3c00]">
          Skills
        </span>
      </h1>

      {/* Skills Grid */}
      <div className="mt-8 grid grid-cols-4 gap-x-14 gap-y-14 max-w-[820px]">

        <SkillCircle
          icon={
            <Atom
              size={65}
              className="text-[#9a9a9f] group-hover:text-[#61dafb] transition"
            />
          }
          percent="60%"
          label="React"
        />

        <SkillCircle
          icon={
            <Figma
              size={65}
              className="text-[#9a9a9f] group-hover:text-white transition"
            />
          }
          percent="85%"
          label="Figma"
        />

        <SkillCircle
          icon={
            <BadgeCheck
              size={65}
              className="text-[#9a9a9f] group-hover:text-white transition"
            />
          }
          percent="80%"
          label="HTML / CSS"
        />

        <SkillCircle
          icon={
            <SiNextdotjs
              size={65}
              className="text-[#9a9a9f] group-hover:text-white transition"
            />
          }
          percent="80%"
          label="Next.js"
        />

        <SkillCircle
          icon={
            <SiJavascript
              size={65}
              className="text-[#9a9a9f] group-hover:text-[#f7df1e] transition"
            />
          }
          percent="60%"
          label="JavaScript"
        />

        <SkillCircle
          icon={
            <Github
              size={65}
              className="text-[#9a9a9f] group-hover:text-white transition"
            />
          }
          percent="90%"
          label="GitHub"
        />

      </div>
    </>
  );
}

/* =======================
   SkillCircle Component
======================= */

function SkillCircle({
  icon,
  percent,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  percent: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      
      {/* Circle */}
      <div
        className={`w-[130px] h-[190px] rounded-full border
        flex flex-col items-center justify-center
        transition-all duration-300
        ${
          active
            ? "border-[#ff3c00]"
            : "border-[#3a3a3f] group-hover:border-[#ff3c00]"
        }`}
      >
        {icon}

        <p className="mt-3 text-[16px] font-medium text-[#9a9a9f] group-hover:text-[#ff3c00] transition">
          {percent}
        </p>
      </div>

      {/* Label */}
      <p className="mt-4 text-[15px] text-[#9a9a9f] group-hover:text-white transition">
        {label}
      </p>
    </div>
  );
}