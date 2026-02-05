import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';

interface TechnologiesSectionProps {
    technologies: string[];
}

const TechnologiesSection = ({ technologies }: TechnologiesSectionProps) => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t.technologiesUsed}</h2>
            <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesSection;
