'use client'

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  // NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import ThemeToggle from '@/components/ThemeToggle'
import { useState } from 'react'
import Link from "next/link";



export function TopNavbar(){
  
  const navItems = [
    {
      name: "Home",
      link: "/", // Matches the id of HeroSection
    },
    {
      name: "About Us",
      link: "./AboutUs", // Load AboutUs page
    },
    {
      name: "Services",
      link: "/services", // Matches the id of ServicesGrid
    },
    {
      name: "Clients",
      link: "/#clients", // Matches the id of PersonaPicker
    },
    // {
    //   name: "Pricing",
    //   link: "#pricing", // Matches the id of PersonaPicker
    // },
    
    {
      name: "FAQ",
      link: "/#faq", // Matches the id of FAQ
    },
    {
      name: "Contact",
      link: "/contact", // Navigate to Contact page
    }
    // {
    //   name: "Footer",
    //   link: "#footer", // Matches the id of Footer
    // },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <div 
          className="relative w-full z-[100]"
        >
            <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="bg-white/70 dark:text-white dark:bg-black/7 backdrop-blur-4xl dark:backdrop-blur-2xl transition-colors duration-300 font-bold">

          <NavbarLogo />
          <NavItems items={navItems}/>
          <div className="flex items-center gap-2">
          <ThemeToggle/>
            {/* Varients for button are primary and secondary */}
            {/* <NavbarButton variant="primary">Login</NavbarButton> */}
            {/* <NavbarButton variant="primary">Get Started</NavbarButton> */}
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-900 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton> */}
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get Started
              </NavbarButton> */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
 
      {/* Navbar */}
        </div>
    )
}