import React from 'react';
import { Database, Github, Linkedin } from 'lucide-react';
import { useUserData } from '../hooks/useUserData';

const Footer = () => {
  const { brand, personal, social } = useUserData();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-slate-800 p-2 rounded-lg border border-slate-700">
                <Database className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-xl font-bold text-white">{brand.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors duration-200">About Profile</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors duration-200">Case Studies</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Competencies</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-400">Operations Analytics</span></li>
              <li><span className="text-slate-400">Industrial Machine Learning</span></li>
              <li><span className="text-slate-400">Predictive Maintenance</span></li>
              <li><span className="text-slate-400">Supply Chain Optimization</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Connect</h3>
            <div className="space-y-2 text-sm">
              <a href={`mailto:${personal.email}`} className="block text-slate-400 hover:text-white transition-colors">
                {personal.email}
              </a>
              <p className="text-slate-400">{personal.location}</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href={social.github}
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={social.linkedin}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;