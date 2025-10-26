import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillSection } from "@/components/sections/skills"
import { CertificateSection  } from "@/components/sections/certification" 
// import { ExperienceSection } from "@/components/sections/experiences"
import { ContactSection } from "@/components/sections/contact"
import { BlogSection } from "@/components/sections/blog"
import { TutorialSection } from "@/components/sections/tutorial"
import { ShortsSection } from "@/components/sections/shorts"
import { EducationSection } from "@/components/sections/education"
import { WorkExSection } from "@/components/sections/workex"
import { ProjectSection } from "@/components/sections/project"



export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <BlogSection/>
      <TutorialSection/>
      <ShortsSection/>
      <WorkExSection/>
      <SkillSection />
      <ProjectSection/>
      <CertificateSection/>
      <EducationSection/>
      <ContactSection/>
    </div>
  )
}
