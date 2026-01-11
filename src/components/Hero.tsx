import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useUserData } from '../hooks/useUserData';

const Hero = () => {
  const { personal, social } = useUserData();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
                <span className="text-sm font-semibold text-blue-900 tracking-wide uppercase">
                  Available for Operations & Analytics Roles
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Hi, I'm{' '}
                <span className="text-blue-900">
                  {personal.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-600 font-normal">
                {personal.title}
              </h2>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl border-l-4 border-blue-900 pl-6">
              {personal.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-slate-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-900/20">
                View Operational Projects
              </a>
              <a href="/CV%20-%20Sebastian%20Rolando%20-%20EN.pdf" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-md font-semibold hover:border-slate-900 hover:text-slate-900 transition-all duration-200" download>
                Download Resume
              </a>
            </div>

            <div className="flex space-x-8 pt-4">
              <a
                href={social.github}
                className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href={social.linkedin}
                className="text-slate-500 hover:text-blue-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href={social.email}
                className="text-slate-500 hover:text-red-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative z-10">
              <div className="w-80 h-80 sm:w-96 sm:h-96 bg-slate-200 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative industrial elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-slate-200 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-slate-900 transition-colors duration-200 flex flex-col items-center gap-2"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest font-medium">Discover More</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;