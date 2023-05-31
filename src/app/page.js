
'use client';
import React from 'react';
import HeroSection from './components/Hero';
import FooterSection from './components/footer';


export default function page() {
  return (
    <div class="max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8">
    <HeroSection />
    <FooterSection />
    </div>
    
  )
}
