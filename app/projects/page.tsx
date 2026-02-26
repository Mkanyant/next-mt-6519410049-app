import React from 'react'

import Image from "next/image";
import task from "@/assets/images/task.png";
export default function Projects() {
  return (
    <>
      <h1 className="text-[40px] font-semibold tracking-wide pl-3">
        Featured{" "}
        <span className="text-[#ff3c00]">
          Projects
        </span>
      </h1>

      <div className="mt-5 max-w-[760px]">

        <h2 className="text-[18px] font-semibold">
          Manage Task App - fullstack web development
        </h2>

        <p className="mt-3 text-[15px] leading-[24px] text-[#9a9a9f] max-w-[640px]">
          Here’s my latest project built with Next.js and Laravel, using
          TailwindCSS on the front-end. Watch the video to see the
          responsive landing page in action!
        </p>

        <div className="mt-8">
          <Image
            src={task}
            alt="Manage Task App"
            className="w-full rounded-md pl-15"
          />
        </div>

      </div>
    </>
  );
}