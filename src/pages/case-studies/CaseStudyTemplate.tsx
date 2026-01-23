import { useEffect } from 'react';
import { ExternalLink, ArrowLeft, TrendingDown, DollarSign, Factory, TrendingUp, Database, Server, Activity, Shield, Brain, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import CaseStudyHero from '../../components/case-study/CaseStudyHero';
import KeyImpactCards, { type KeyImpactMetric } from '../../components/case-study/KeyImpactCards';
import TechnologiesSection from '../../components/case-study/TechnologiesSection';
import VisualEvidence, { type VisualEvidenceItem } from '../../components/case-study/VisualEvidence';

// Icon mapping for JSON data
const iconMap: Record<string, any> = {
    TrendingDown,
    TrendingUp,
    DollarSign,
    Factory,
    Database,
    Server,
    Activity,
    Shield,
    Brain,
};

interface Method {
    name: string;
    description: string;
}

interface CaseStudyData {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    keyImpact: Array<{
        value: string;
        label: string;
        description: string;
        icon: string;
    }>;
    proofOfConcept?: {
        title: string;
        body: string;
    };
    sections: {
        overview: string;
        businessValue: string[];
        keyResults: string[];
        benefits: string[];
        stakeholders: string[];
        technologies: string[];
        methods: Method[];
        visualEvidence: VisualEvidenceItem[];
    };
    links: {
        demo?: string | null;
        github?: string | null;
        linkedin?: string | null;
    };
}

interface CaseStudyTemplateProps {
    data: CaseStudyData;
}

const CaseStudyTemplate = ({ data }: CaseStudyTemplateProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Map JSON icon names to actual Lucide icon components
    const keyImpactMetrics: KeyImpactMetric[] = data.keyImpact.map(metric => ({
        ...metric,
        icon: iconMap[metric.icon] || Database,
    }));

    return (
        <div className="min-h-screen">
            {/* Back Navigation */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="text-sm font-medium">Back to Portfolio</span>
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <CaseStudyHero title={data.title} subtitle={data.subtitle} />

            {/* Portfolio Proof of Concept Banner */}
            {data.proofOfConcept && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl p-6 flex gap-4 items-start">
                        <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-lg">
                            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                {data.proofOfConcept.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                                {data.proofOfConcept.body}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Key Impact Section */}
            <KeyImpactCards metrics={keyImpactMetrics} />

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Overview */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            <span
                                dangerouslySetInnerHTML={{ __html: data.sections.overview.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white">$1</strong>') }}
                            />
                        </p>
                    </div>
                </section>

                {/* Business Value */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Business Value</h2>
                    <ul className="space-y-3">
                        {data.sections.businessValue.map((value, index) => (
                            <li key={index} className="flex items-start text-slate-600 dark:text-slate-300">
                                <span className="text-green-600 dark:text-green-400 mr-3 text-xl font-bold">•</span>
                                <span
                                    className="leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: value.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white">$1</strong>') }}
                                />
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Key Results */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Results</h2>
                    <ul className="space-y-3">
                        {data.sections.keyResults.map((result, index) => (
                            <li key={index} className="flex items-start text-slate-600 dark:text-slate-300">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl font-bold">✓</span>
                                <span
                                    className="leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: result.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white">$1</strong>') }}
                                />
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Key Benefits */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Benefits</h2>
                    <ul className="space-y-3">
                        {data.sections.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-slate-600 dark:text-slate-300">
                                <span className="text-slate-400 dark:text-slate-500 mr-3 text-xl font-bold">•</span>
                                <span
                                    className="leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: benefit.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white">$1</strong>') }}
                                />
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Stakeholders Impacted */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Stakeholders Impacted</h2>
                    <ul className="space-y-2">
                        {data.sections.stakeholders.map((stakeholder, index) => (
                            <li key={index} className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                • {stakeholder}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Technologies Used */}
                <TechnologiesSection technologies={data.sections.technologies} />

                {/* Methods & Algorithms */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Methods & Algorithms</h2>
                    <ul className="space-y-4">
                        {data.sections.methods.map((method, index) => (
                            <li key={index} className="text-slate-600 dark:text-slate-300">
                                <span className="font-semibold text-slate-900 dark:text-white">• {method.name}</span>
                                {' – '}
                                <span className="leading-relaxed">{method.description}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Visual Evidence */}
                <VisualEvidence items={data.sections.visualEvidence} />

                {/* Access / Links */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Access</h2>
                    <div className="flex flex-wrap gap-4">
                        {data.links.demo && (
                            <a
                                href={data.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                            >
                                <ExternalLink className="h-5 w-5" />
                                Live Demo
                            </a>
                        )}
                        {data.links.github && (
                            <a
                                href={data.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors duration-200"
                            >
                                <ExternalLink className="h-5 w-5" />
                                GitHub
                            </a>
                        )}
                        {data.links.linkedin && (
                            <a
                                href={data.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors duration-200"
                            >
                                <ExternalLink className="h-5 w-5" />
                                LinkedIn
                            </a>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CaseStudyTemplate;
