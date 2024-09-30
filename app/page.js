"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';
import { TimelineDemo } from "@/components/timeline";

export default function Home() {
    
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Coding', 'Web Development', 'WriteUps', 'Cyber Security', 'Machine Learning'],
        typeSpeed: 50,
      });
  
      return () => {
        
        typed.destroy();
      };
    }, []); 

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">Blogs</span> Related to <br className="hidden lg:block" /> <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>


 <section className="py-12 bg-white dark:bg-neutral-950">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Our Author</h2>

    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Posting about WriteUp's"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Yatin Sharma</h3>
          <p className="text-gray-500 dark:text-gray-300">Ctf Player</p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">Posting about Web Development</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Maneesh Shukla</h3>
          <p className="text-gray-500 dark:text-gray-300">Proficient Web Developer</p>
        </div>
      </div>
      {}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Post's about App Developer"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Ayush Yadav</h3>
          <p className="text-gray-500 dark:text-gray-300">App Developer</p>
        </div>
      </div>
    </div>
  </div>
</section>






    <TimelineDemo />
    </main>
  );
};