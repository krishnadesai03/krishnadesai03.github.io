"use client"

import { motion } from "framer-motion"

type PersonalAchievement = {
  id: number
  title: string
  description: string
  color: string
  textColor: string
}

const personalAchievements: PersonalAchievement[] = [
  {
    id: 1,
    title: "Training & Placement Coordinator",
    description: "Served as the Student Training and Placement Coordinator for three consecutive years, managing interviews, training sessions, and pre-placement activities while liaising between students, faculty, and recruiters.",
    color: "from-blue-500 to-indigo-600",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "UCMAS Abacus Excellence",
    description: "Completed all UCMAS Abacus levels and achieved state-level distinction for two consecutive years, strengthening accuracy, efficiency, and attention to detail.",
    color: "from-purple-500 to-pink-600",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Classical Dance Training",
    description: "Completed a 7-year Bharatanatyam training from Nalanda University, cultivating discipline, balance, and expressive artistry through classical dance.",
    color: "from-green-500 to-teal-600",
    textColor: "text-white",
  },
]

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden py-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Leadership & Personal Milestones
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Showcasing my leadership roles and personal accomplishments beyond the professional realm
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {personalAchievements.map((achievement, idx) => (
              <motion.div
                key={achievement.id}
                className={`bg-gradient-to-br ${achievement.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.h3
                  className={`text-2xl font-semibold mb-3 ${achievement.textColor}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                >
                  {achievement.title}
                </motion.h3>
                <motion.p
                  className={`text-base leading-relaxed ${achievement.textColor} opacity-95`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
                >
                  {achievement.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

