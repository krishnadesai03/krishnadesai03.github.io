import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillSection } from "@/components/sections/skills"
import { LeadershipSection } from "@/components/sections/leadership" 
// import { ExperienceSection } from "@/components/sections/experiences"
import { ContactSection } from "@/components/sections/contact"
import { BlogSection } from "@/components/sections/blog"
import { AchievementsSection } from "@/components/sections/achievements"
import { WorkExSection } from "@/components/sections/workex"
import { ProjectSection } from "@/components/sections/project"



export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <WorkExSection/>
      <ProjectSection/>
      <SkillSection />
      <AchievementsSection/>
      <LeadershipSection/>
      <ContactSection/>
    </div>
  )
}
