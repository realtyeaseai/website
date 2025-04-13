'use client'

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";


export function TopNavbar(){
  
  const navItems = [
    {
      name: "Home",
      link: "#hero", // Matches the id of HeroSection
    },
    {
      name: "About Us",
      link: "./AboutUs", // Load AboutUs page
    },
    {
      name: "Services",
      link: "#services", // Matches the id of ServicesGrid
    },
    {
      name: "Persona",
      link: "#persona", // Matches the id of PersonaPicker
    },
    
    {
      name: "FAQ",
      link: "#faq", // Matches the id of FAQ
    },
    {
      name: "Contact",
      link: "#contact", // Matches the id of ContactUs
    }
    // {
    //   name: "Footer",
    //   link: "#footer", // Matches the id of Footer
    // },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div 
          className="relative w-full"
        >
            <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            {/* Varients for button are primary and secondary */}
            {/* <NavbarButton variant="primary">Login</NavbarButton> */}
            <NavbarButton variant="primary">Get Started</NavbarButton>
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
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton> */}
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
 
      {/* Navbar */}
        </div>
    )
}