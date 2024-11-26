import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
        >
          Privacy Policy
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          Your privacy is important to us. This policy outlines how we collect,
          use, and protect your information.
        </p>
      </div>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 p-8 rounded-xl border border-green-800"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-300 mb-4">
            We may collect personal information from you when you visit our
            site, register on the site, subscribe to our newsletter, or interact
            with us in other ways. This information may include your name, email
            address, and any other details you provide.
          </p>

          <h2 className="text-2xl font-bold text-green-400 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-300 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Improve our website and services</li>
            <li>
              Send periodic emails regarding your order or other products and
              services
            </li>
            <li>Respond to your inquiries and support needs</li>
            <li>Process transactions and send you confirmation</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-400 mb-4">
            3. How We Protect Your Information
          </h2>
          <p className="text-gray-300 mb-4">
            We implement a variety of security measures to maintain the safety
            of your personal information. These measures include encryption,
            firewalls, and secure server hosting.
          </p>

          <h2 className="text-2xl font-bold text-green-400 mb-4">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-300 mb-4">
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties without your consent, except to
            provide services you have requested or as required by law.
          </p>

          <h2 className="text-2xl font-bold text-green-400 mb-4">
            5. Your Rights
          </h2>
          <p className="text-gray-300 mb-4">
            You have the right to access, correct, or delete your personal
            information. If you wish to exercise these rights, please contact us
            using the information below.
          </p>

          <h2 className="text-2xl font-bold text-green-400 mb-4">
            6. Changes to Our Privacy Policy
          </h2>
          <p className="text-gray-300 mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you about significant changes in the way we treat personal
            information by sending a notice to the primary email address
            specified in your account or by placing a prominent notice on our
            site.
          </p>

          <h2 className="text-2xl font-bold text-green-400 mb-4">
            7. Contact Us
          </h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about this Privacy Policy, the practices
            of this site, or your dealings with this site, please contact us at:
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Email:</strong> support@vaultchain.com
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Address:</strong> 123 VaultChain Lane, Crypto City,
            Blockchain State, 12345
          </p>
          <p className="text-gray-300 mb-4">
            Thank you for trusting us with your information. We are committed to
            protecting your privacy and ensuring your experience with VaultChain
            is secure and enjoyable.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
