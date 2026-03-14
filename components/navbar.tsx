"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { usePathname } from 'next/navigation';


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeHash, setActiveHash] = useState("")
  const pathname = usePathname()

  // Updated navigation items as per user request
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/#projects" },
    { name: "Experience", path: "/#work-experience" },
    { name: "Education & Skills", path: "/#education-skills" },
    { name: "Achievements", path: "/#shorts" },
    { name: "Recommendations", path: "/#faq" },
  ]

  useEffect(() => {
    setMounted(true)
    setActiveHash(window.location.hash || "")

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.filter(item => item.path.startsWith('/#')).map(item => item.path.substring(2))
      let currentSection = ""

      // Find the most visible section
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the top of the element is above or close to the center of the screen
          // and bottom is below the top of the screen
          if (rect.top <= 200 && rect.bottom >= 100) {
            currentSection = `#${section}`
            break
          }
        }
      }

      // If at top of page, select Home
      if (window.scrollY < 100) {
        currentSection = ""
      }

      setActiveHash(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    // Delay initial check slightly to allow elements to render
    setTimeout(handleScroll, 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // Remove navItems dependency since it's constant inside

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const targetId = path.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Delay URL update to allow scroll animation to finish without Next.js router interruption
        setTimeout(() => {
          window.history.pushState(null, '', path);
        }, 800);
      }
    } else if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        window.history.pushState(null, '', path);
      }, 800);
    }
  }

  const isActive = (itemPath: string) => {
    if (itemPath === '/') {
      return activeHash === ''
    }
    return activeHash === itemPath.substring(1)
  }

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
          "bg-[#1C2314] text-white shadow-lg", // Dark green/black background like the reference
          "w-full max-w-6xl"
        )}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity whitespace-nowrap mr-4"
        >
          Krishna Desai
        </a>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                isActive(item.path) ? "text-white font-bold" : "text-gray-400"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side: Contact Button & Theme/Mobile Toggles */}
        <div className="flex items-center gap-3 ml-4">
          <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')}>
            <Button
              variant="default"
              className="hidden sm:flex bg-white text-[#1C2314] hover:bg-gray-200 rounded-full px-6 font-medium"
            >
              Contact Me
            </Button>
          </a>

          {/* Mobile Menu Trigger */}
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden text-white hover:bg-white/10 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          scale: isMobileMenuOpen ? 1 : 0.95,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        className="absolute top-20 left-4 right-4 bg-[#1C2314] text-white rounded-2xl p-4 shadow-xl xl:hidden flex flex-col gap-2"
      >
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            onClick={(e) => handleNavClick(e, item.path)}
            className={cn(
              "px-4 py-2 hover:bg-white/10 rounded-lg transition-colors text-sm font-medium",
              isActive(item.path) ? "bg-white/20 text-white font-bold" : "text-gray-300"
            )}
          >
            {item.name}
          </a>
        ))}
        <a
          href="/#contact"
          onClick={(e) => handleNavClick(e, '/#contact')}
          className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors text-sm font-bold text-center mt-2 bg-white/10"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  )
}
