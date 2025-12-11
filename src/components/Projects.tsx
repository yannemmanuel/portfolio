import { useState } from 'react';
import Section from './Section';
import { Folder, ArrowRight } from 'lucide-react';
import ProjectModal, { type ProjectData } from './ProjectModal';

const PROJECTS: ProjectData[] = [
    {
        title: "Analyse des ventes d'un Hyper Marché",
        category: "Power BI / ETL)",
        description: "Tableau de bord interactif développé avec Power BI pour analyser les ventes, les profits et les performances produit d'un Hyper Marché avec des KPI commerciaux et tendances mensuelles.",
        longDescription: "Ce projet présente un tableau de bord interactif développé avec Power BI Desktop pour analyser les ventes, les profits et les performances produit d'un Hyper Marché. L'objectif est de fournir une vue synthétique et exploitable des KPI commerciaux, des tendances mensuelles et de la contribution des segments et catégories. Le dataset Hyper Store a été entièrement traduit en français pour harmoniser les colonnes et le rendu du rapport.",
        context: "Projet personnel visant à démontrer mes compétences en Business Intelligence et en transformation de données. Le travail comprend un processus ETL complet avec Power Query, la création d'un modèle de données optimisé, et le développement de visualisations interactives permettant d'explorer les performances par continent, segment et catégorie.",
        results: [
            "Nettoyage et transformation complète des données avec Power Query (suppression doublons, fractionnement colonnes, standardisation)",
            "Création d'un groupe personnalisé Country Group (Amérique du Nord/Sud)",
            "Développement de 8+ visualisations interactives (Revenu/Profit par mois, Top/Bottom 5 produits)",
            "Analyse de la répartition du revenu par segment et catégorie",
            "Filtres interactifs par continent et année pour exploration dynamique"
        ],
        tech: ["Power BI", "Power Query", "DAX", "ETL", "Data Modeling"],
        github: "https://github.com/yannemmanuel/powerbi-sales-analysis",
        images: [
            "/powerbi-dashboard-1.png",
            "/powerbi-dashboard-2.png",
            "/powerbi-dashboard-3.png"
        ]
    },
    {
        title: "Optimisation des services de santé",
        category: "Data / BI",
        description: "Création d'un entrepôt de données en étoile et de tableaux de bord interactifs pour analyser les performances médicales et la facturation.",
        longDescription: "Ce projet visait à transformer la gestion des données d'un établissement de santé. En passant de fichiers Excel dispersés à un entrepôt de données centralisé, nous avons pu offrir une vision à 360° de l'activité.",
        context: "Projet académique visant à résoudre des problématiques de données silotées et difficiles à exploiter dans un contexte hospitalier.",
        results: [
            "Conception et implémentation d'un Data Warehouse (Schéma en étoile)",
            "Création de mesures DAX complexes pour le suivi de l'activité",
            "Mise en place d'un processus ETL automatisé"
        ],
        tech: ["Power BI", "SQL", "ETL"]
    },
    {
        title: "Dashboard RH",
        category: "Business Intelligence",
        description: "Conception d'un tableau de bord pour le suivi des effectifs, de l'absentéisme et de la performance des employés.",
        longDescription: "Développement d'un outil de pilotage RH permettant aux managers de suivre les indicateurs clés de performance sociale.",
        context: "Projet de fin de module visant à digitaliser le reporting RH traditionnel.",
        results: [
            "Modélisation des données RH (Effectifs, Absences, Paie)",
            "Design d'une interface utilisateur ergonomique et intuitive",
            "Calcul automatisé des indicateurs d'absentéisme et de turnover"
        ],
        tech: ["Power BI", "Excel", "KPI"]
    }
];

const ProjectCard = ({ project, onClick }: { project: ProjectData, onClick: () => void }) => (
    <div
        onClick={onClick}
        className="group relative bg-white dark:bg-navy-light p-6 rounded shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-teal/5 hover:border-teal-600/30 dark:hover:border-teal/30 h-full flex flex-col cursor-pointer"
    >
        <div className="flex justify-between items-start mb-4">
            <div className="text-teal-600 dark:text-teal">
                <Folder size={40} />
            </div>
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal transition-colors">
                    <ArrowRight size={24} />
                </span>
            </div>
        </div>

        <h3 className="text-xl font-bold text-navy dark:text-slate-lighter mb-2 group-hover:text-teal-600 dark:group-hover:text-teal transition-colors">{project.title}</h3>
        <p className="text-teal-600 dark:text-teal font-mono text-xs mb-4">{project.category}</p>

        <div className="bg-slate-100 dark:bg-navy-lighter/50 p-4 rounded mb-4 flex-grow">
            <p className="text-slate-700 dark:text-slate-light text-sm leading-relaxed line-clamp-3">
                {project.description}
            </p>
        </div>

        <ul className="flex flex-wrap gap-3 mt-auto">
            {project.tech.map((t, i) => (
                <li key={i} className="text-slate-600 dark:text-slate text-xs font-mono">
                    {t}
                </li>
            ))}
        </ul>
    </div>
);

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    return (
        <Section id="projects" className="max-w-6xl mx-auto px-6 lg:px-0">
            <div className="flex items-center mb-12">
                <h2 className="text-3xl font-bold text-navy dark:text-slate-lighter flex items-center">
                    <span className="text-teal-600 dark:text-teal font-mono text-xl mr-2">03.</span> Projets Phares
                </h2>
                <div className="h-px bg-slate-300 dark:bg-navy-lighter flex-grow ml-4 max-w-xs"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Section>
    );
};

export default Projects;
