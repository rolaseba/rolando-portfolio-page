import CaseStudyTemplate from './CaseStudyTemplate';
import data from '../../data/caseStudies/lstm-energy-demand.json';

export default function LSTMEnergyPage() {
    return <CaseStudyTemplate data={data} />;
}
