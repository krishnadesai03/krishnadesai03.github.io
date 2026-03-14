"use client"

import { motion } from "framer-motion"

export function FAQSection() {
    return (
        <section id="faq" className="bg-[#d5dec5] pt-28 pb-24 px-6 sm:px-12 flex flex-col transition-colors duration-300">
            <div className="max-w-5xl mx-auto w-full">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-3xl md:text-4xl font-medium text-[#1C2314]"
                    >
                        Recommendations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        What My Collaborators Say.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-sm"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src="/professor.jpg"
                            alt="Elizabeth Florescu"
                            className="w-16 h-16 rounded-full object-cover shadow-sm"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-[#1C2314]">Elizabeth Florescu</h3>
                            <p className="text-sm text-[#1C2314]/80">Director of Research at The Millennium Project</p>
                        </div>
                    </div>
                    <p className="font-bold text-[#1C2314] leading-relaxed text-sm md:text-base mt-2 mb-4">
                        Krishna demonstrates the ability to translate complex multidisciplinary data into clear, strategic visual insights for policymaking.
                    </p>
                    <div className="text-[#1C2314]/90 leading-relaxed text-sm md:text-base">
                        <p>
                            I had the pleasure of working with <strong>Krishna on a visualization project of the State of the Future Index (SOFI)</strong> of the Millennium Project, as part of her Information Visualization course at Indiana University. She showed an exceptional ability to navigate <strong>a dataset that was massive and deeply interconnected across economic, environmental, social, and governance domains.</strong> Her ability to move from understanding the complexity of the data to <strong>shaping it into clear, meaningful insights</strong> was impressive. She brought a <strong>high level of analytical rigour</strong> to the project, and her Power BI work — especially the <strong>scenario modelling and sensitivity analysis powered by advanced DAX</strong> — demonstrated a rare combination of technical skills and strategic thinking. The visualization helps understand <strong>how different policies could influence the future</strong>, thus helping policymaking and setting priorities. She was also a <strong>wonderful collaborator with a solutions-focused approach</strong>. I highly recommend Krishna to any organization looking for someone who combines <strong>deep analytical skill with clear impact visualization.</strong>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
