import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic goes here
    try {
      const response = await fetch(import.meta.env.VITE_API_URL+'/api/contact/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        alert('Something went wrong. Please try again later.');
      } else {
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
        alert('Message sent successfully!');
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
  };
  

  return (
    <div className="min-h-screen mt-16 flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-4xl font-semibold text-pink-600 text-center mb-8">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-semibold text-blue-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              required
              className="mt-1 block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out hover:shadow-lg"
              placeholder="John Doe"
            />
          </div>
           {/* Phone no. */}
           <div className="relative">
            <label htmlFor="phone" className="block text-sm font-semibold text-blue-600">
              Phone number (Optional)
            </label>
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              id="phone"
              className="mt-1 block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out hover:shadow-lg"
              placeholder="7002524244"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-semibold text-blue-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              required
              className="mt-1 block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out hover:shadow-lg"
              placeholder="john.doe@example.com"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-semibold text-blue-600">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="message"
              required
              rows={5}
              className="mt-1 block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out hover:shadow-lg"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
