import React from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-4xl font-bold text-orange-600 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-lg text-gray-700 mb-12 text-center max-w-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We are here to assist you with any inquiries regarding our luxurious cosmetics. Please fill out the form below, and we will get back to you shortly.
      </motion.p>
      <form className="bg-orange-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={4}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <motion.div
          className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          type="submit"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Location</h2>
        <p className="text-lg text-gray-700">Visit us at:</p>
        <p className="text-lg text-gray-700">123 Luxury Ave, Glamour City, CA 90210</p>
        <h3 className="text-xl font-bold text-orange-600 mt-6">Business Hours</h3>
        <p className="text-lg text-gray-700">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-lg text-gray-700">Saturday: 10 AM - 4 PM</p>
        <p className="text-lg text-gray-700">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;