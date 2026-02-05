import CaseStudyTemplate from './CaseStudyTemplate';
import dataEn from '../../data/caseStudies/spare-parts-anomaly.json';
import dataEs from '../../data/caseStudies/spare-parts-anomaly_es.json';
import { useLanguage } from '../../hooks/useLanguage';

export default function SparePartsAnomalyPage() {
    const { language } = useLanguage();
    const data = language === 'es' ? dataEs : dataEn;
    return <CaseStudyTemplate data={data} />;
}
