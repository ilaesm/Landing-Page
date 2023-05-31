'use client';
import React from 'react';
import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import LandingHead from './components/header';
import EmailForm from './components/email';
import Datasource from './components/data';

export default function Home() {
  return (
<div className="max-w-[75%] w-full items-center mx-auto ">
  <LandingHead />
  <section className="bg-white dark:bg-gray-900">
    <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Heading Heading Heading</h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">desc desc desc desc</p>
        <EmailForm />
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ml-8">
        <SplineCustom scene="https://prod.spline.design/18tE3AOOB4u-iAA2/scene.splinecode" />
      </div>
    </div>
  </section>
  <Datasource />
</div>

  );
}

function SplineCustom({ scene }) {
  const style = {
    width: '350px',
    height: '350px',
  };

  return (
    <div style={style}>
      <Spline scene={scene} />
    </div>
  );
}
