import { ExternalLink, Github, Settings, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUserData } from '../../hooks/useUserData';

const Projects = () => {
  const { projects } = useUserData();



  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest mb-4">
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Industrial & Operational Solutions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Real-world applications of data science to solve complex efficiency, quality, and supply chain challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 group flex flex-col h-full relative"
              >
                <div className="h-48 overflow-hidden relative border-b border-slate-200/50 dark:border-slate-700/50">
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 saturate-[0.8] group-hover:saturate-100"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-sm border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {project.category}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${project.status === 'PoC'
                      ? 'bg-amber-100/50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400'
                      : 'bg-emerald-100/50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400'
                      }`}>
                      {project.status === 'PoC' ? (
                        <Lightbulb className="w-3 h-3 opacity-70" />
                      ) : (
                        <Settings className="w-3 h-3 opacity-70" />
                      )}
                      {project.status === 'PoC' ? 'PoC' : 'Implemented'}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.caseStudyPath ? (
                      <Link
                        to={project.caseStudyPath}
                        className="after:absolute after:inset-0 after:z-10"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Impact</h4>
                      <ul className="space-y-1.5">
                        {project.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-start text-xs text-slate-600 dark:text-slate-400">
                            <span className="text-green-600 dark:text-green-400 mr-2 font-bold">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex gap-4 mt-auto relative z-20">
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="flex-1 flex items-center justify-center gap-2 bg-slate-900 dark:bg-blue-600 text-white py-2.5 rounded-md text-sm font-semibold hover:bg-slate-800 dark:hover:bg-blue-700 transition-all duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 py-2.5 rounded-md text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="inline-flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 font-semibold border-b-2 border-slate-200 dark:border-slate-700 pb-1 hover:text-blue-800 dark:hover:text-blue-400 hover:border-blue-800 dark:hover:border-blue-400 transition-all duration-200">
            View All Case Studies <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section >
  );
};

export default Projects;