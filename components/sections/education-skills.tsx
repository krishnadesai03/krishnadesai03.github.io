"use client"

import { motion } from "framer-motion"

type Education = {
  id: number
  degree: string
  school: string
  duration: string
  details: string[]
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Data Science",
    school: "Indiana University Bloomington (3.8 / 4.0)",
    duration: "Aug 2024 – May 2026",
    details: [
      "Relevant Courses: Applied Algorithms, Applied Machine Learning, Data Mining, Data Visualization, Applied Database Technologies, Language Modeling",
      "Gen AI Engineer (Faculty Assistant in Data Science) at IUB"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Information Technology",
    school: "University of Mumbai (3.7 / 4.0)",
    duration: "Jan 2021 – Jul 2024",
    details: [
      "Relevant Courses: Data Structures, Database Management, Software Engineering, Data Science, Machine Learning, Soft Computing",
      "Final year project: IMDB Sentiment Analysis with Deep Learning"
    ]
  }
]

const skillsData = [
  {
    category: "Languages",
    items: ["Python", "C++", "R", "SQL"]
  },
  {
    category: "Visualization",
    items: ["Power BI", "Tableau", "Streamlit", "Matplotlib", "Seaborn", "Plotly"]
  },
  {
    category: "Machine Learning & AI",
    items: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "Keras", "HuggingFace Transformers", "SHAP", "GANs", "LSTM", "NLP"]
  },
  {
    category: "Data Engineering & Big Data",
    items: ["Apache Airflow", "Spark (PySpark)", "Kafka", "dbt", "ETL/ELT Pipelines", "Data Modeling", "Feature Engineering", "Entity Resolution"]
  },
  {
    category: "Cloud & Databases",
    items: ["AWS (S3, EC2, Glue, Redshift, Athena, SageMaker, Lambda)", "GCP", "Azure", "MySQL", "PostgreSQL", "Snowflake", "MongoDB", "Neo4j"]
  },
  {
    category: "MLOps & Tools",
    items: ["Docker", "FastAPI", "MLflow", "Git", "GitHub", "Terraform", "CI/CD"]
  }
]

export function EducationSkillsSection() {
  return (
    <section id="education-skills" className="bg-[#d5dec5] pt-[110px] pb-24 transition-colors duration-300 overflow-hidden text-[#1C2314]">
      <div className="container mx-auto px-4 z-10 max-w-7xl">
        <div className="mb-8">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-medium mb-3 text-[#1C2314]"
          >
            Education & Skills
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Education Column (5/12) */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-6"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-start"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-3">
                  <h4 className="text-xl font-bold text-[#1C2314] mb-1">{edu.degree}</h4>
                  <p className="text-md font-medium text-gray-700">{edu.school}</p>
                  <span className="inline-block px-3 py-1 mt-2 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                    {edu.duration}
                  </span>
                </div>
                <ul className="space-y-1.5 mt-2">
                  {edu.details.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 leading-snug">
                      <span className="mr-2 mt-1 h-1.5 w-1.5 bg-[#1C2314] rounded-full shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Column (7/12) */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <div className="flex flex-col gap-6">
              {skillsData.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="flex flex-col gap-1"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <h4 className="text-lg font-bold text-[#1C2314]">{skillGroup.category}:</h4>
                  <p className="text-gray-700 leading-relaxed text-md font-medium">
                    {skillGroup.items.join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
