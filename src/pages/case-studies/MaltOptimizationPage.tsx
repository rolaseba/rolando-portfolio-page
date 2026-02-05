import CaseStudyTemplate from './CaseStudyTemplate';
import dataEn from '../../data/caseStudies/malt-optimization.json';
import dataEs from '../../data/caseStudies/malt-optimization_es.json';
import { useLanguage } from '../../hooks/useLanguage';

export default function MaltOptimizationPage() {
    const { language } = useLanguage();
    const data = language === 'es' ? dataEs : dataEn;
    return <CaseStudyTemplate data={data} />;
}
