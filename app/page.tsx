import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { FAQSection } from "@/components/sections/faq"
// import { ExperienceSection } from "@/components/sections/experiences"
import { ContactSection } from "@/components/sections/contact"
import { ShortsSection } from "@/components/sections/shorts"
import { WorkExSection } from "@/components/sections/workex"
import { ProjectSection } from "@/components/sections/project"
import { EducationSkillsSection } from "@/components/sections/education-skills"


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <WorkExSection />
      <EducationSkillsSection />
      <ShortsSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}
