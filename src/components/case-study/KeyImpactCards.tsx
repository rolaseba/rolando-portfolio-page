import type { LucideIcon } from 'lucide-react';

export interface KeyImpactMetric {
    icon: LucideIcon;
    value: string;
    label: string;
    description: string;
}

interface KeyImpactCardsProps {
    metrics: KeyImpactMetric[];
}

const KeyImpactCards = ({ metrics }: KeyImpactCardsProps) => {
    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-800/30 border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => {
                        const IconComponent = metric.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                                    {metric.label}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                    {metric.description}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default KeyImpactCards;
