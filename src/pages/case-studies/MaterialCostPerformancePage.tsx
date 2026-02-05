import CaseStudyTemplate from './CaseStudyTemplate';
import dataEn from '../../data/caseStudies/material-cost-performance.json';
import dataEs from '../../data/caseStudies/material-cost-performance_es.json';
import { useLanguage } from '../../hooks/useLanguage';

export default function MaterialCostPerformancePage() {
    const { language } = useLanguage();
    const data = language === 'es' ? dataEs : dataEn;
    return <CaseStudyTemplate data={data} />;
}
