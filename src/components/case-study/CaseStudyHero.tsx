interface CaseStudyHeroProps {
    title: string;
    subtitle: string;
}

const CaseStudyHero = ({ title, subtitle }: CaseStudyHeroProps) => {
    return (
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                    {title}
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

export default CaseStudyHero;
