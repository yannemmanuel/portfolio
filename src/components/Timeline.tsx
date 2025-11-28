import Section from './Section';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const TIMELINE_DATA = [
    {
        type: 'education',
        title: 'Master MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)',
        organization: 'UFHB / Université Rennes',
        date: '2024 - Présent',
        description: 'Double Diplomation. Spécialisation en Systèmes d\'Information et Business Intelligence.'
    },
    {
        type: 'education',
        title: 'Licence MIAGE',
        organization: 'UFHB / Université Rennes',
        date: '2020 - 2024',
        description: 'Double Diplomation. Formation en informatique, gestion et sciences des données.'
    },
    {
        type: 'education',
        title: 'Baccalauréat série D',
        organization: 'Lycée Moderne II, Bouaflé',
        date: '2020',
        description: 'Obtention du Baccalauréat Scientifique.'
    }
];

const TimelineItem = ({ item, isLast }: { item: any, isLast: boolean }) => (
    <div className="flex gap-6 md:gap-10 group">
        {/* Line and Icon Column */}
        <div className="flex flex-col items-center shrink-0">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-navy-light border-2 border-teal-600 dark:border-teal flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                {item.type === 'education' ? (
                    <GraduationCap size={16} className="text-teal-600 dark:text-teal" />
                ) : (
                    <Briefcase size={16} className="text-teal-600 dark:text-teal" />
                )}
            </div>
            {!isLast && <div className="w-px bg-slate-300 dark:bg-navy-lighter h-full mt-2"></div>}
        </div>

        {/* Content Column */}
        <div className="pb-12 pt-1">
            <div className="inline-flex items-center text-teal-600 dark:text-teal font-mono text-xs md:text-sm bg-teal-600/10 dark:bg-teal/10 px-3 py-1 rounded-full mb-3">
                <Calendar size={14} className="mr-2" />
                {item.date}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-navy dark:text-slate-lighter mb-2 group-hover:text-teal-600 dark:group-hover:text-teal transition-colors">
                {item.title}
            </h3>
            <h4 className="text-slate-700 dark:text-slate font-mono text-sm md:text-base mb-4">
                {item.organization}
            </h4>
            <p className="text-slate-700 dark:text-slate-light text-sm md:text-base leading-relaxed max-w-2xl">
                {item.description}
            </p>
        </div>
    </div>
);

const Timeline = () => {
    return (
        <Section id="timeline" className="max-w-4xl mx-auto px-6 lg:px-0">
            <div className="flex items-center mb-12">
                <h2 className="text-3xl font-bold text-navy dark:text-slate-lighter flex items-center">
                    <span className="text-teal-600 dark:text-teal font-mono text-xl mr-2">*</span> Parcours
                </h2>
                <div className="h-px bg-slate-300 dark:bg-navy-lighter flex-grow ml-4 max-w-xs"></div>
            </div>

            <div className="relative">
                {TIMELINE_DATA.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                        isLast={index === TIMELINE_DATA.length - 1}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Timeline;
