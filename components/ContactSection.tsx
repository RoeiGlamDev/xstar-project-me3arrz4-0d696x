import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      // Here you would typically send the form data to your server
    }
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-3xl font-bold text-orange-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact luxury LRP cosmetics
        </motion.h2>
        <p className="text-gray-700 mb-4">
          For inquiries regarding our luxury cosmetics, please fill out the form below or contact us directly.
        </p>
        <form onSubmit={handleSubmit} className="bg-orange-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 w-full}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 w-full}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="reason">Reason for Contact</label>
            <select
              name="reason"
              id="reason"
              value={formData.reason}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Feedback">Product Feedback</option>
              <option value="Partnership Opportunities">Partnership Opportunities</option>
              <option value="Wholesale Inquiries">Wholesale Inquiries</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 w-full}
              placeholder="Your Message"
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
          {submitted && <p className="text-green-500 mt-4">Thank you for contacting luxury LRP cosmetics! We will get back to you shortly.</p>}
        </form>
        <div className="mt-8">
          <h3 className="text-xl font-bold text-orange-500">Business Information</h3>
          <p className="text-gray-700">Address: 123 Luxury Lane, Glamour City, CA 90210</p>
          <p className="text-gray-700">Business Hours: Mon-Fri 9 AM - 6 PM</p>
          <p className="text-gray-700">Email: contact@luxurylrpcosmetics.com</p>
          <p className="text-gray-700">Phone: (123) 456-7890</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;