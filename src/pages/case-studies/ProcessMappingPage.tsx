import CaseStudyTemplate from './CaseStudyTemplate';
import dataEn from '../../data/caseStudies/process-mapping.json';
import dataEs from '../../data/caseStudies/process-mapping_es.json';
import { useLanguage } from '../../hooks/useLanguage';

export default function ProcessMappingPage() {
    const { language } = useLanguage();
    const data = language === 'es' ? dataEs : dataEn;
    return <CaseStudyTemplate data={data} />;
}
