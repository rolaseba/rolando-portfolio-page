import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useUserData } from '../hooks/useUserData';

const Contact = () => {
  const { personal, social } = useUserData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to optimize your operations with data? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-50 text-blue-700">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <a href={`mailto:${personal.email} `} className="text-sm text-slate-600 hover:text-blue-700">
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-50 text-blue-700">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <p className="text-sm text-slate-600">{personal.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-50 text-blue-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Location</p>
                    <p className="text-sm text-slate-600">{personal.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <h4 className="text-sm font-medium text-slate-900 mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  <a href={social.linkedin} className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={social.github} className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-200">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="Inquiry about..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-200 outline-none resize-none"
                    placeholder="Tell me about your operations or data challenges..."
                  ></textarea>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-slate-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-900/10"
                  >
                    Send Message
                    <Send className="h-5 w-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;