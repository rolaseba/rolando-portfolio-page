import CaseStudyTemplate from './CaseStudyTemplate';
import dataEn from '../../data/caseStudies/warehouse-obsolescence.json';
import dataEs from '../../data/caseStudies/warehouse-obsolescence_es.json';
import { useLanguage } from '../../hooks/useLanguage';

export default function WarehouseObsolescencePage() {
    const { language } = useLanguage();
    const data = language === 'es' ? dataEs : dataEn;
    return <CaseStudyTemplate data={data} />;
}
