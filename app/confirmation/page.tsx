"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Confirmation() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(searchParams.get("name") || "");
    setEmail(searchParams.get("email") || "");
  }, [searchParams]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <motion.div
        className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-600 dark:text-green-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Registration Confirmed!
          </h1>
          <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
            Thank you for registering for The Next Man Summit
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-8"
          variants={itemVariants}
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Registration Details
          </h2>
          <div className="space-y-3">
            {name && (
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Name:</span> {name}
              </p>
            )}
            {email && (
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Email:</span> {email}
              </p>
            )}
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Event:</span> The Next Man Summit
              2025
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Date:</span> June 15-17, 2025
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Location:</span> Grand Convention
              Center, New York
            </p>
          </div>
        </motion.div>

        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-6 border-l-4 border-yellow-400">
            <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-2">
              Important Information
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>A confirmation email has been sent to your email address</li>
              <li>
                Please check your spam folder if you don&apos;t see it in your
                inbox
              </li>
              <li>
                You&apos;ll receive additional event details and updates via
                email
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>
          Have questions? Contact us at{" "}
          <a
            href="mailto:support@nextmansummit.com"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            support@nextmansummit.com
          </a>
        </p>
      </motion.div>
    </div>
  );
}
