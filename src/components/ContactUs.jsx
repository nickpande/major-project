import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });
    try {
      // Simulate sending form data to an API
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <div className="px-[3%] w-full overflow-hidden overflow-y-auto bg-zinc-200 min-h-screen text-gray-700 font-sans" style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 1.5rem' }}>
      {/* Navigation Header */}
      <div className="w-full px-[1%] flex items-center justify-between h-[10vh] space-x-4 overflow-x-auto">
        <div className="flex items-center text-2xl text-zinc-400 font-semibold space-x-2 whitespace-nowrap">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] mr-3 ri-arrow-left-line cursor-pointer"
            aria-label="Go Back"
            role="button"
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') navigate(-1); }}
          ></i>
          <span>Contact Us</span>
        </div>
      </div>

      <header className="mb-10 mx-12">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Have questions or want to work together? Fill out the form below and we’ll get back to you as soon as possible.
        </p>
      </header>

      <form onSubmit={handleSubmit} noValidate className="bg-zinc-100 rounded-3xl p-12 shadow-md max-w-3xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label htmlFor="name" className="flex flex-col text-gray-800">
            Name
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
              placeholder="Your full name"
              aria-label="Your full name"
            />
          </label>

          <label htmlFor="email" className="flex flex-col text-gray-800">
            Email
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
              placeholder="you@example.com"
              aria-label="Your email address"
            />
          </label>
        </div>

        <label htmlFor="subject" className="flex flex-col text-gray-800">
          Subject
          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
            placeholder="Subject of your message"
            aria-label="Subject of your message"
          />
        </label>

        <label htmlFor="message" className="flex flex-col text-gray-800">
          Message
          <textarea
            name="message"
            id="message"
            required
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition resize-none"
            placeholder="Write your message here"
            aria-label="Your message"
          />
        </label>

        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full bg-yellow-400 text-gray-900 font-semibold py-4 rounded-xl text-lg shadow-md transition hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          aria-busy={status.submitting}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>

        {status.submitted && (
          <p className="mt-6 text-green-600 font-medium" role="alert">
            Thank you! Your message has been sent successfully.
          </p>
        )}
        {status.error && (
          <p className="mt-6 text-red-600 font-medium" role="alert">
            Oops! Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
