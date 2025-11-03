"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const navItems = [
  { name: "Home", path: "/", hash: "hero" },
  { name: "About", path: "/#about", hash: "about" },
  { name: "Experience", path: "/#work-experience", hash: "work-experience" },
  { name: "Projects", path: "/#projects", hash: "projects" },
  { name: "Skills", path: "/#skills", hash: "skills" },
  { name: "Achievements", path: "/#achievements", hash: "achievements" },
  { name: "Contact", path: "/#contact", hash: "contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Get all sections
      const sections = navItems.map(item => document.getElementById(item.hash)).filter(Boolean)
      
      // Find the current section in view
      const scrollPosition = window.scrollY + 100
      let currentSection = ""
      
      for (const section of sections) {
        if (section) {
          const offsetTop = section.offsetTop
          const offsetHeight = section.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section.id
            break
          }
        }
      }
      
      setActiveSection(currentSection || "hero")
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        "bg-background/80 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            Krishna
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.hash
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {activeSection === item.hash && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
        }}
        className={cn(
          "absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg md:hidden",
          !isMobileMenuOpen && "hidden"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "block py-2 text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.hash
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
