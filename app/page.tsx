import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experiences"
import { ContactSection } from "@/components/sections/contact"
import { BlogSection } from "@/components/sections/blog"
import { TutorialSection } from "@/components/sections/tutorial"
import { ShortsSection } from "@/components/sections/shorts"



export default function Home() {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <HeroSection />
      <BlogSection/>
      <TutorialSection/>
      <ShortsSection/>
      <SkillSection/>
      <ExperienceSection/>
      <ContactSection/>
    </div>
  )
}
