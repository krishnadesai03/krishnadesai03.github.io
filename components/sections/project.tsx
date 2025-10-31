"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown, FaBriefcase } from "react-icons/fa"

type WorkExperience = {
  id: number
  role: string
  company: string
  duration: string
  details: string[]
}

const workExperienceData: WorkExperience[] = [
    {
    id: 1,
    role: "IMDB EMOANALYSIS: Understanding Movie Sentiment with Deep Learning",
    company: "Python, LSTM, Bi-LSTM, Deep Learning, Sentiment Analysis",
    duration: "May 2024",
    details: [
      "Developed sentiment analysis models using LSTM and Bi-LSTM, achieving an accuracy of 0.86 on the final model.",
      "Analyzed a 50,000-record dataset, solving complex data challenges and implementing 5-6 crucial pre-processing steps.",
      "Applied analytical thinking to derive insights into audience sentiment trends, validating the model on live data with 0.85 accuracy.",
      "My model outperformed others by 7.5% in terms of accuracy and prediction quality."
    ]
  },
  {
    id: 2,
    role: "Binary Image Classification for Waste Management",
    company: "TensorFlow, Keras, CNN, GCP, Cloud Run, Data Augmentation",
    duration: "2024",
    details: [
      "Developed a deep learning model to classify waste images into 2 categories namely recyclable and non-recyclable images.",
      "Used a dataset of 1,800 training and 450 testing images, ensuring balanced category representation for effective model evaluation.",
      "Implemented data preprocessing techniques, like image augmentation and normalization, to enhance model performance by 10%.",
      "Designed and trained a CNN-based model using TensorFlow and Keras, achieving an accuracy of 72% on the test dataset.",
      "Leveraged GCP for data storage, model training using AI Platform, and deployment through Cloud Run for real-time classification."
    ]
  },
  {
    id: 3,
    role: "Global Superstore Analytics – AWS End-to-End Data Pipeline and Dashboard",
    company: "AWS, S3, Glue Crawler, Redshift, Athena, Power BI, ETL",
    duration: "2024",
    details: [
      "Designed and implemented a scalable data pipeline on AWS (S3, Glue Crawler + ETL, Redshift) to process Global Superstore data, improving overall data usability by ~10% and reducing ETL runtime by ~5% through schema optimization and structured transformations.",
      "Queried and analyzed transformed datasets with Athena and built an interactive Power BI dashboard (10+ KPIs, sales trends, profitability insights), helping reduce manual reporting effort by ~15% and making insights more accessible to business stakeholders.",
      "Configured IAM roles, resolved connectivity/authentication issues, and implemented CloudWatch monitoring, improving pipeline stability and reducing troubleshooting time by ~10%."
    ]
  }
]

export function ProjectSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpanded(prev => (prev === id ? null : id))
  }

  return (
    <section id="project" className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Projects</h2>
          <p className="text-gray-600 text-lg"></p>
        </div>

        <div className="space-y-6">
          {workExperienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex items-start gap-4">
                  <FaBriefcase className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === exp.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-gray-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expanded === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4"
                  >
                    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                      {exp.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}