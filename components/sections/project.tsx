"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
};

const projectsAI: Project[] = [
  {
    id: 1,
    title: "SHMAS: Smart Hospital Multi-Agent System",
    description: "Built an AI-driven multi-agent system with five autonomous agents (triage, scheduling, bed management, conflict resolution, and mental health analysis) to automate and optimize hospital workflows in real time. Integrated LLMs via Groq APIs (DeepSeek-R1-Distill-LLaMA-70B) and LangGraph for intelligent decision-making.",
    image: "/shmas-img.png",
    color: "from-blue-500 to-purple-600",
    textColor: "text-blue-100",
  },
  {
    id: 2,
    title: "IMDB Emotional Analysis: Understanding Movie Sentiment with Deep Learning",
    description: "Developed sentiment analysis models using LSTM and Bi-LSTM, achieving an accuracy of 0.86 on the final model.",
    image: "/IMDB.png",
    color: "from-purple-500 to-pink-600",
    textColor: "text-purple-100",
  },
  {
    id: 3,
    title: "Smart Waste Classifier",
    description: "Designed and deployed an end-to-end binary image classification system to categorize waste as recyclable or non-recyclable using CNN architectures with TensorFlow and Keras. Improved performance using data augmentation, transfer learning (ResNet50), and tuning, raising accuracy from 72% to 88%.",
    image: "/Waste Classification.png",
    color: "from-green-500 to-teal-600",
    textColor: "text-green-100",
  },
];

const projectsDataEng: Project[] = [
  {
    id: 1,
    title: "Banking Risk Analytics Platform",
    description: "Built a cloud-native data lakehouse by streaming MySQL data into Snowflake with Kafka and dbt, designing fact-dimension models that cut query latency by 40%. Developed an explainable ML-based risk scoring system (XGBoost + SHAP + MLflow) exposed via FastAPI, allowing live credit-risk evaluation.",
    image: "/Risk Analytics.png",
    color: "from-red-500 to-orange-600",
    textColor: "text-red-100",
  },
  {
    id: 2,
    title: "Global Superstore Analytics – AWS End-to-End Data Pipeline",
    description: "Designed and implemented a scalable data pipeline on AWS to process Global Superstore data, improving overall data usability by ~10%.",
    image: "/Superstore Analytics.png",
    color: "from-indigo-500 to-blue-600",
    textColor: "text-indigo-100",
  },
  {
    id: 3,
    title: "YouTrend Data Lake",
    description: "Designed and deployed a data lake on AWS S3 to store and manage over 100,000 records of trending YouTube video data, implementing robust partitioning and cataloging via AWS Glue, resulting in 99% data query success rate for downstream analytics.",
    image: "/Youtrend.png",
    color: "from-yellow-500 to-orange-500",
    textColor: "text-yellow-100",
  },
  {
    id: 4,
    title: "Twitter Data Pipeline",
    description: "Built an end-to-end data pipeline to ingest 1,000 tweets per run, transform them into normalized CSVs, and load to S3 with under 3-minute end-to-end latency. Productionized workflows with Airflow DAGs achieving 99% task success over 50+ scheduled runs.",
    image: "/Twitter Data Pipeline.png",
    color: "from-cyan-500 to-blue-600",
    textColor: "text-cyan-100",
  },
];

export function ProjectSection() {
  const renderProjects = (projects: Project[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`bg-gradient-to-br ${project.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
          />
          <motion.h3
            className={`text-xl font-semibold mt-4 ${project.textColor}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className={`mt-2 ${project.textColor} opacity-90 line-clamp-4`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
          >
            {project.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  )

  return (
    <section id="projects" className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center"
      >
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Projects
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Notable Projects & Data Solutions
            </motion.p>
          </div>

          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="ai" className="text-lg">AI & ML</TabsTrigger>
              <TabsTrigger value="dataeng" className="text-lg">Data Engineering & Analytics</TabsTrigger>
            </TabsList>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <TabsContent value="ai">
                {renderProjects(projectsAI)}
              </TabsContent>
              <TabsContent value="dataeng">
                {renderProjects(projectsDataEng)}
              </TabsContent>
            </motion.div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  )
}
