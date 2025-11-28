import Section from './Section';
import { Database, Users, BarChart3 } from 'lucide-react';

type SkillLevel = 'Notions' | 'Intermédiaire' | 'Avancé';

interface Skill {
    name: string;
    level?: SkillLevel;
    details?: string;
}

const SkillBar = ({ level }: { level: SkillLevel }) => {
    const getLevelConfig = (level: SkillLevel) => {
        switch (level) {
            case 'Notions': return { width: '33%', color: 'bg-teal-600/40 dark:bg-teal/40' };
            case 'Intermédiaire': return { width: '66%', color: 'bg-teal-600/70 dark:bg-teal/70' };
            case 'Avancé': return { width: '100%', color: 'bg-teal-600 dark:bg-teal' };
            default: return { width: '0%', color: 'bg-gray-500' };
        }
    };

    const config = getLevelConfig(level);

    return (
        <div className="w-24 h-1.5 bg-slate-200 dark:bg-navy-lighter rounded-full overflow-hidden mt-1">
            <div
                className={`h-full rounded-full ${config.color}`}
                style={{ width: config.width }}
            ></div>
        </div>
    );
};

const SkillCard = ({ title, icon: Icon, skills, className = '' }: { title: string, icon: any, skills: Skill[], className?: string }) => (
    <div className={`bg-white dark:bg-navy-light p-6 rounded shadow-lg hover:-translate-y-1 transition-transform duration-300 border border-slate-200 dark:border-teal/5 ${className}`}>
        <div className="flex items-center mb-6 text-teal-600 dark:text-teal">
            <Icon size={24} className="mr-3" />
            <h3 className="text-xl font-bold text-navy dark:text-slate-lighter">{title}</h3>
        </div>
        <ul className="space-y-4">
            {skills.map((skill, index) => (
                <li key={index} className="flex flex-col">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-slate-700 dark:text-slate-light font-mono text-sm font-bold">{skill.name}</span>
                        {skill.level && <span className="text-xs text-teal-600/80 dark:text-teal/80 font-mono">{skill.level}</span>}
                    </div>
                    {skill.level && <SkillBar level={skill.level} />}
                    {skill.details && (
                        <span className="text-xs text-slate-500 dark:text-slate-light/60 mt-1">{skill.details}</span>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

const Skills = () => {
    return (
        <Section id="skills" className="max-w-6xl mx-auto px-6 lg:px-0">
            <div className="flex items-center mb-12">
                <h2 className="text-3xl font-bold text-navy dark:text-slate-lighter flex items-center">
                    <span className="text-teal-600 dark:text-teal font-mono text-xl mr-2">02.</span> Compétences
                </h2>
                <div className="h-px bg-slate-300 dark:bg-navy-lighter flex-grow ml-4 max-w-xs"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillCard
                    title="Business Intelligence & Viz"
                    icon={BarChart3}
                    skills={[
                        { name: "Power BI", level: "Intermédiaire", details: "Modélisation, DAX, Visualisation" },
                        { name: "Excel", level: "Intermédiaire", details: "TCD, Power Query, Formules" },
                        { name: "Power Query", level: "Intermédiaire", details: "Nettoyage & Transformation" }
                    ]}
                    className="md:col-span-1 h-full"
                />

                <SkillCard
                    title="Data Engineering & Langages"
                    icon={Database}
                    skills={[
                        { name: "SQL", level: "Intermédiaire", details: "Requêtes complexes, Jointures" },
                        { name: "R", level: "Intermédiaire", details: "Analyse statistique, Viz" },
                        { name: "UML / Merise", level: "Intermédiaire", details: "Modélisation des SI" },
                        { name: "Modélisation", level: "Intermédiaire", details: "Schéma en étoile / Flocon" },
                        { name: "Python", level: "Notions", details: "Bases, Analyse exploratoire" }
                    ]}
                    className="md:col-span-1 h-full"
                />

                <SkillCard
                    title="Outils & Soft Skills"
                    icon={Users}
                    skills={[
                        { name: "Git / GitHub", level: "Intermédiaire" },
                        { name: "Esprit d'analyse" },
                        { name: "Travail en équipe" },
                        { name: "Communication" },
                        { name: "Gestion de projet" }
                    ]}
                    className="md:col-span-1 h-full"
                />
            </div>
        </Section>
    );
};

export default Skills;
