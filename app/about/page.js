// pages/about.js

import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <div className="px-8">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company and team." />
      </Head>
      <main className="min-h-screen py-16 flex flex-col justify-center items-center">
        <h1 className="m-0 leading-tight text-4xl text-center">About Us</h1>
        <p className="text-center text-xl mt-4">
          Welcome to our company. We are dedicated to providing the best service possible.
        </p>
        <section className="mt-8 text-center">
          <h2 className="text-2xl mb-4">Our Mission</h2>
          <p>
            Our mission is to deliver high-quality products that bring value to our customers.
          </p>
        </section>
        <section className="mt-8 text-center">
          <h2 className="text-2xl mb-4">Our Team</h2>
          <p>
            We have a diverse team of professionals who are passionate about what they do.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
