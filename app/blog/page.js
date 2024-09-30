"use client"; 

import React from "react";
import { BackgroundGradientDemo } from "@/components/ui/background-gradient-demo"; 
import Image from "next/image";
import yatin from "@public/yatin.jpg";

const Blog = () => {
  const demos = [
    {
      imageSrc: "/jordans1.webp",
      title: "Air Jordan 1 Retro High OG",
      description: "The classic sneaker that started it all.",
      price: 180,
    },
    {
      imageSrc: "/jordans2.webp",
      title: "Air Jordan 4 Retro Reimagined",
      description: "A modern twist on a timeless design.",
      price: 200,
    },
    {
      imageSrc: yatin, 
      title: "Air Jordan 11 Retro",
      description: "Iconic and versatile, perfect for any occasion.",
      price: 220,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Blog</h1>
      <div className="flex flex-wrap justify-start gap-4">
        {demos.map((demo, index) => (
          <div key={index} className="flex-1 min-w-[300px] max-w-[400px]">
            <BackgroundGradientDemo
              imageSrc={demo.imageSrc}
              title={demo.title}
              description={demo.description}
              price={demo.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
