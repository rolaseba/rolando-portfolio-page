export interface VisualEvidenceItem {
    image: string;
    caption: string;
}

interface VisualEvidenceProps {
    items: VisualEvidenceItem[];
}

const VisualEvidence = ({ items }: VisualEvidenceProps) => {
    return (
        <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Visual Evidence</h2>
            <div className="space-y-8">
                {items.map((visual, index) => (
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
    );
};

export default VisualEvidence;
