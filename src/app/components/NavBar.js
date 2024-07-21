'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  // State to control mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Company Name - Navigation</title>
        <meta name="description" content="Navigate our website to explore our services, media, case studies, FAQ, and contact information. Easy access to our phone and email for your convenience." />
        <meta name="keywords" content="navigation, services, media, cases, FAQ, contacts, phone, email" />
      </Head>

      <header className="bg-white mx-auto shadow-xl xl:fixed xl:left-32 z-10 w-full lg:w-[90%] lg:rounded-xl xl:w-[80%]  p-4 mt-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Company Logo */}
            <Image
              src="/lpgo.svg"
              alt="Company Logo"
              className="dark:invert"
              width={174}
              height={60}
              priority
            />
            
            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:block" aria-label="Main navigation">
              <ul className="flex gap-4">
                {['Services', 'Media', 'Cases', 'FAQ', 'Contacts'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="hover:text-[#80A948]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Desktop Contact Information */}
            <address className="hidden lg:flex items-center gap-7">
              {/* Phone Number */}
              <div className="flex items-center gap-2">
                <Image
                  src="/phone.svg"
                  alt="phone outline"
                  className="dark:invert"
                  width={24}
                  height={24}
                  priority
                />
                <span className="text-[#80A948]">+91 000000000</span>
              </div>
              {/* Email Address */}
              <div className="flex items-center gap-2">
                <Image
                  src="/mail.svg"
                  alt="mail outline"
                  className="dark:invert"
                  width={24}
                  height={24}
                  priority
                />
                <span className="text-[#80A948]">demo@gmail.com</span>
              </div>
            </address>
          </div>
          
          {/* Mobile Menu (conditionally rendered) */}
          <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <nav className="bg-gray-50 rounded-lg shadow-md p-4" aria-label="Mobile navigation">
              {/* Mobile Navigation Menu */}
              <ul className="flex flex-col gap-2">
                {['Services', 'Media', 'Cases', 'FAQ', 'Contacts'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="block py-2 px-4 rounded-md hover:bg-white hover:text-[#80A948] transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Mobile Contact Information */}
              <address className="mt-4 pt-4 border-t border-gray-200">
                {/* Phone Number */}
                <div className="flex items-center gap-2 py-2 px-4">
                  <Image
                    src="/phone.svg"
                    alt="phone outline"
                    className="dark:invert"
                    width={24}
                    height={24}
                    priority
                  />
                  <span className="text-[#80A948]">+91 000000000</span>
                </div>
                {/* Email Address */}
                <div className="flex items-center gap-2 py-2 px-4">
                  <Image
                    src="/mail.svg"
                    alt="mail outline"
                    className="dark:invert"
                    width={24}
                    height={24}
                    priority
                  />
                  <span className="text-[#80A948] break-all">demo@gmail.com</span>
                </div>
              </address>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}