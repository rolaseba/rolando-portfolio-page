import { Target, Clock, Award, Zap } from 'lucide-react';
import { useUserData } from '../hooks/useUserData';

const About = () => {
  const { about, skills } = useUserData();

  const iconMap: Record<string, React.ElementType> = {
    'Years Experience': Clock,
    'Annual Savings Generated': Target,
    'Stock-out Reduction': Award,
    'Plant Reliability': Zap
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Professional Profile
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4">
              Turning Data into Operational Value
            </h3>

            <div className="prose prose-lg text-slate-600 space-y-6">
              {about.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-600" /> Core Focus
              </h4>
              <ul className="space-y-3">
                {about.whatIDo.map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats & Skills */}
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {about.stats.map((stat, index) => {
                const IconComponent = iconMap[stat.label] || Zap;
                return (
                  <div key={index} className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-700">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-3xl font-bold text-slate-900">{stat.number}</span>
                    </div>
                    <div className="text-sm text-slate-600 font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Proficiency */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6">Technical Expertise</h3>
              <div className="space-y-4">
                {skills.proficiency.slice(0, 5).map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm font-semibold text-slate-700 mb-1">
                      <span>{skill.skill}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="relative w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-slate-800 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;