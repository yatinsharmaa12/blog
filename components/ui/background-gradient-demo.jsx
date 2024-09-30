// components/ui/background-gradient-demo.jsx
"use client"; // Ensure this is present if using hooks or state

import React from "react";
import { BackgroundGradient } from "./background-gradient"; // Adjust the import path if needed
import Image from "next/image";

export const BackgroundGradientDemo = ({ imageSrc, title, description, price }) => {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Image
        src={imageSrc}
        alt={title}
        height="400"
        width="400"
        className="object-contain"
      />
      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        {title}
      </p>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
        <span>Buy now</span>
        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          ${price}
        </span>
      </button>
    </BackgroundGradient>
  );
};
