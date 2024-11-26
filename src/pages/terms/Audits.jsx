import React from "react";
import { motion } from "framer-motion";

const auditsData = [
  {
    id: 1,
    title: "Smart Contract Audit - V1.0",
    date: "2023-09-15",
    status: "Completed",
    notes: "All critical vulnerabilities resolved. No issues found.",
  },
  {
    id: 2,
    title: "Security Audit - User Authentication",
    date: "2023-08-20",
    status: "In Progress",
    notes: "Testing phase ongoing. Expected completion by end of the month.",
  },
  {
    id: 3,
    title: "Performance Audit - API",
    date: "2023-07-10",
    status: "Completed",
    notes: "Performance optimized. Response times improved by 30%.",
  },
];

const Audits = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
        >
          Audit Reports
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          Here you can find the latest audit reports for our projects.
        </p>
      </div>

      {/* Audits List */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 p-8 rounded-xl border border-green-800"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Recent Audits
          </h2>
          <ul className="space-y-4">
            {auditsData.map((audit) => (
              <li
                key={audit.id}
                className="p-4 bg-gray-800 rounded-lg border border-green-700"
              >
                <h3 className="text-xl font-semibold text-green-400">
                  {audit.title}
                </h3>
                <p className="text-gray-300">
                  <strong>Date:</strong> {audit.date}
                </p>
                <p
                  className={`text-gray-300 ${
                    audit.status === "Completed"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  <strong>Status:</strong> {audit.status}
                </p>
                <p className="text-gray-300">
                  <strong>Notes:</strong> {audit.notes}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Audits;
