"use client"; // This makes it a Client Component

import Image from 'next/image';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    // IntersectionObserver to trigger animations on scroll
    const sections = document.querySelectorAll('.animate-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    });

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div>
      {/* About Me Section */}
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg animate-section">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
                <Image
                  src="/yatin.jpg"  // Direct reference to the image in the public folder
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello, I am Yatin, interested in cybersecurity and competitive programming. Here I will post my Writeups and blogs related to cybersecurity.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Here you will get solutions to TryHackMe rooms and some writeups of CTF challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
