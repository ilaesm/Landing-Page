import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingHead() {
  return (
<header className="flex items-center justify-between py-12 px-6 md:px-10 bg-black text-white">
  <div className="flex items-center h-full">
    <Image src="/logo.svg" alt="Logo" width={220} height={220} />
  </div>
  <nav className="flex items-center ml-auto">
    <Link href="/" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        About
    </Link>
  </nav>
</header>
  )
}




