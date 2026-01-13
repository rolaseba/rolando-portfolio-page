import { useEffect } from 'react';
import { ExternalLink, ArrowLeft, TrendingDown, DollarSign, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const SparePartsAnomalyCaseStudy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const keyImpactMetrics = [
        {
            icon: TrendingDown,
            value: '-0.5%',
            label: 'Downtime Reduction',
            description: 'Unplanned downtime decrease'
        },
        {
            icon: DollarSign,
            value: 'USD 58K',
            label: 'Annual Savings',
            description: 'Prevented unnecessary consumption'
        },
        {
            icon: Factory,
            value: '350K TN',
            label: 'Industrial Plant',
            description: 'Malt production capacity/year'
        }
    ];

    const technologies = [
        'Python',
        'Pandas',
        'NumPy',
        'Plotly',
        'SciPy',
        'Matplotlib',
        'Seaborn'
    ];

    const methods = [
        {
            name: 'EWMA',
            description: 'Exponential Weighted Moving Average for trend smoothing'
        },
        {
            name: 'Z-score',
            description: 'Statistical anomaly detection in dispatch trends'
        },
        {
            name: 'CUSUM',
            description: 'Cumulative sum for deviation analysis'
        },
        {
            name: 'KDE',
            description: 'Kernel Density Estimation for distribution modeling'
        },
        {
            name: 'Peak Detection',
            description: 'scipy.signal.find_peaks for consumption anomalies'
        },
        {
            name: 'Rolling Statistics',
            description: 'Moving averages and standard deviation for volatility detection'
        }
    ];

    const visualEvidence = [
        {
            image: '/rolando-portfolio-page/projects/Spare Parts Consumption Anomaly Detection/figures/newplot2-edit.png',
            caption: 'Consumption Peaks – Dispatch vs Trend Analysis'
        },
        {
            image: '/rolando-portfolio-page/projects/Spare Parts Consumption Anomaly Detection/figures/newplot1-edit.png',
            caption: 'Anomaly Detection with Statistical Thresholds'
        },
        {
            image: '/rolando-portfolio-page/projects/Spare Parts Consumption Anomaly Detection/figures/newplot-edit.png',
            caption: 'Time Series Pattern Recognition'
        },
        {
            image: '/rolando-portfolio-page/projects/Spare Parts Consumption Anomaly Detection/figures/equipos-edit.png',
            caption: 'Equipment-Level Consumption Tracking'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
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
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Spare Parts Consumption Anomaly Detection
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Detecting abnormal spare parts usage to prevent downtime and optimize maintenance
                    </p>
                </div>
            </section>

            {/* Key Impact Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-800/30 border-b border-slate-200 dark:border-slate-700">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {keyImpactMetrics.map((metric, index) => {
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

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Overview */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            This project detects anomalies in item consumption based on historical dispatch data from an industrial warehouse.
                            It integrates data wrangling, time series analysis, seasonality detection, and anomaly detection techniques to identify
                            unusual dispatch behavior for specific inventory items. The system supports proactive maintenance and stock control by
                            highlighting abnormal consumption patterns before they escalate into critical failures.
                        </p>
                    </div>
                </section>

                {/* Business Value */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Business Value</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start text-slate-600 dark:text-slate-300">
                            <span className="text-green-600 dark:text-green-400 mr-3 text-xl font-bold">•</span>
                            <span className="leading-relaxed">Early detection of equipment failures and material misuse</span>
                        </li>
                        <li className="flex items-start text-slate-600 dark:text-slate-300">
                            <span className="text-green-600 dark:text-green-400 mr-3 text-xl font-bold">•</span>
                            <span className="leading-relaxed">Reduction of unnecessary stock usage and procurement costs</span>
                        </li>
                        <li className="flex items-start text-slate-600 dark:text-slate-300">
                            <span className="text-green-600 dark:text-green-400 mr-3 text-xl font-bold">•</span>
                            <span className="leading-relaxed">Improved maintenance planning and downtime prevention</span>
                        </li>
                    </ul>
                </section>

                {/* Key Results */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Results</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start text-slate-600 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl font-bold">✓</span>
                            <span className="leading-relaxed">
                                Reduced unplanned downtime by <strong className="text-slate-900 dark:text-white">~0.5%</strong>
                            </span>
                        </li>
                        <li className="flex items-start text-slate-600 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl font-bold">✓</span>
                            <span className="leading-relaxed">
                                Maintained <strong className="text-slate-900 dark:text-white">&lt;1.6% Emergency Downtime</strong> (EDT) target
                            </span>
                        </li>
                        <li className="flex items-start text-slate-600 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl font-bold">✓</span>
                            <span className="leading-relaxed">
                                Generated <strong className="text-slate-900 dark:text-white">USD 58K in savings</strong> from prevented consumption
                            </span>
                        </li>
                    </ul>
                </section>

                {/* Key Benefits */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Benefits</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start text-slate-600 dark:text-slate-300">
                            <span className="text-slate-400 dark:text-slate-500 mr-3 text-xl font-bold">•</span>
                            <span className="leading-relaxed">Item-level anomaly detection with statistical rigor</span>
                        </li>
                        <li className="flex items-start text-slate-600 dark:text-slate-300">
                            <span className="text-slate-400 dark:text-slate-500 mr-3 text-xl font-bold">•</span>
                            <span className="leading-relaxed">Scalable across assets, equipment types, and locations</span>
                        </li>
                        <li className="flex items-start text-slate-600 dark:text-slate-300">
                            <span className="text-slate-400 dark:text-slate-500 mr-3 text-xl font-bold">•</span>
                            <span className="leading-relaxed">Enables proactive maintenance actions and inventory control</span>
                        </li>
                    </ul>
                </section>

                {/* Stakeholders Impacted */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Stakeholders Impacted</h2>
                    <ul className="space-y-2">
                        <li className="text-slate-600 dark:text-slate-300 leading-relaxed">• Maintenance Teams</li>
                        <li className="text-slate-600 dark:text-slate-300 leading-relaxed">• Warehouse Management</li>
                        <li className="text-slate-600 dark:text-slate-300 leading-relaxed">• Procurement & Planning</li>
                    </ul>
                </section>

                {/* Technologies Used */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Technologies Used</h2>
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

                {/* Methods & Algorithms */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Methods & Algorithms</h2>
                    <ul className="space-y-4">
                        {methods.map((method, index) => (
                            <li key={index} className="text-slate-600 dark:text-slate-300">
                                <span className="font-semibold text-slate-900 dark:text-white">• {method.name}</span>
                                {' – '}
                                <span className="leading-relaxed">{method.description}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Visual Evidence */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Visual Evidence</h2>
                    <div className="space-y-8">
                        {visualEvidence.map((visual, index) => (
                            <div key={index} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                                <img
                                    src={visual.image}
                                    alt={visual.caption}
                                    className="w-full h-auto"
                                />
                                <div className="p-4 text-center">
                                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                        {visual.caption}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-6 text-center">
                        All values shown have been altered using controlled noise or randomized scaling to protect confidential business data.
                    </p>
                </section>

                {/* Access / Links */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Access</h2>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://deepnote.com/app/data-science-labs-a5bc/Spare-parts-use-in-assets-6dcee31c-36eb-4076-bd5b-8213b3902955?utm_content=6dcee31c-36eb-4076-bd5b-8213b3902955&item_1=193799&__run=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                        >
                            <ExternalLink className="h-5 w-5" />
                            Demo App
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sjrolando/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors duration-200"
                        >
                            <ExternalLink className="h-5 w-5" />
                            LinkedIn
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SparePartsAnomalyCaseStudy;
