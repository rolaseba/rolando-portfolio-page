import { Target, Clock, Award, Zap, ChevronDown } from 'lucide-react';
import { useUserData } from '../../hooks/useUserData';

const About = () => {
  const { about, skills } = useUserData();

  const iconMap: Record<string, React.ElementType> = {
    'Years Experience': Clock,
    'Annual Savings Generated': Target,
    'Stock-out Reduction': Award,
    'Plant Reliability': Zap
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Profile
          </h2>
          <div className="w-24 h-1 bg-blue-900 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-l-4 border-blue-600 dark:border-blue-500 pl-4">
              Turning Data into Operational Value
            </h3>

            <div className="prose prose-lg text-slate-600 dark:text-slate-400 space-y-6">
              {about.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-600 dark:text-yellow-400" /> Core Focus
              </h4>
              <ul className="space-y-3">
                {about.whatIDo.map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats & Skills */}
          <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, index) => {
                const IconComponent = iconMap[stat.label] || Zap;
                return (
                  <div key={index} className="p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-700 dark:text-blue-300">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">{stat.number}</span>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Proficiency */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Technical Expertise</h3>
              <div className="space-y-5">
                {skills.categories.map((category, index) => {
                  const colorMap: Record<string, string> = {
                    "Languages & Libraries": "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800",
                    "Techniques & Methods": "bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-200 dark:border-teal-800",
                    "Tools & Platforms": "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-200 dark:border-purple-800",
                    "Domain Expertise": "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800"
                  };
                  const colorClass = colorMap[category.title] || "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800";

                  return (
                    <div key={index}>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{category.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${colorClass} shadow-sm transition-colors duration-200`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-fade-in-up">
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 transition-colors duration-200 flex flex-col items-center gap-2"
            aria-label="Scroll to projects section"
          >
            <span className="text-xs uppercase tracking-widest font-medium">View Case Studies</span>
            <ChevronDown className="h-5 w-5 animate-bounce-slow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;