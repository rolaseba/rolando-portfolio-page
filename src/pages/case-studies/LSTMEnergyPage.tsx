import CaseStudyTemplate from './CaseStudyTemplate';
import dataEn from '../../data/caseStudies/lstm-energy-demand.json';
import dataEs from '../../data/caseStudies/lstm-energy-demand_es.json';
import { useLanguage } from '../../hooks/useLanguage';

export default function LSTMEnergyPage() {
    const { language } = useLanguage();
    const data = language === 'es' ? dataEs : dataEn;
    return <CaseStudyTemplate data={data} />;
}
