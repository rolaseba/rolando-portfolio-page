import CaseStudyTemplate from './CaseStudyTemplate';
import dataEn from '../../data/caseStudies/hotel-cancellation.json';
import dataEs from '../../data/caseStudies/hotel-cancellation_es.json';
import { useLanguage } from '../../hooks/useLanguage';

export default function HotelCancellationPage() {
    const { language } = useLanguage();
    const data = language === 'es' ? dataEs : dataEn;
    return <CaseStudyTemplate data={data} />;
}
