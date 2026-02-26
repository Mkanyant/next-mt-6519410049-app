import React from 'react'

export default function EduExp() {
  return (
    <>
      <h1 className="text-[40px] font-semibold tracking-wide">
        Education &{" "}
        <span className="text-[#ff6a00]">
          Experience
        </span>
      </h1>

      <div className="mt-7 space-y-8 max-w-[720px] pl-7">

        <div>
          <p className="text-[#ff6a00] text-[16px] font-medium">
            2022 - Present
          </p>

          <p className="mt-2 text-[18px] font-semibold">
            UI/UX Designer
          </p>
          <p className="text-[#9a9a9f] text-[15px]">
            Freelance
          </p>

          <p className="mt-3 text-[18px] font-semibold">
            Fullstack Web Developer
          </p>
          <p className="text-[#9a9a9f] text-[15px]">
            Freelance
          </p>
        </div>

        <div>
          <p className="text-[#9a9a9f] text-[16px]">
            2022 - 2025
          </p>

          <p className="mt-2 text-[18px] font-semibold">
            Bachelor Degree in Technology Digital and Innovation
          </p>
          <p className="text-[#9a9a9f] text-[15px]">
            Southeast Asia University
          </p>
        </div>

        <div>
          <p className="text-[#9a9a9f] text-[16px]">
            2016 - 2021
          </p>

          <p className="mt-2 text-[18px] font-semibold">
            High school
          </p>
          <p className="text-[#9a9a9f] text-[15px]">
            Taweethapisek School
          </p>
        </div>

      </div>
    </>
  );
}