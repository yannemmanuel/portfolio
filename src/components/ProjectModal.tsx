import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export interface ProjectData {
    title: string;
    category: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    longDescription?: string;
    context?: string;
    results?: string[];
    image?: string;
    images?: string[];
}

interface ProjectModalProps {
    project: ProjectData | null;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = project?.images?.length || 0;

    const nextSlide = () => {
        if (totalSlides > 0) {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }
    };

    const prevSlide = () => {
        if (totalSlides > 0) {
            setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        }
    };

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-navy/80 dark:bg-navy/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-navy-light rounded-lg shadow-2xl border border-teal-600/20 dark:border-teal/20 flex flex-col scrollbar-thin scrollbar-thumb-teal-600/50 dark:scrollbar-thumb-teal/50 scrollbar-track-slate-200 dark:scrollbar-track-navy-lighter"
                        style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: 'rgba(100, 255, 218, 0.5) rgba(17, 34, 64, 0.5)'
                        }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-slate-500 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal transition-colors z-10 bg-white/50 dark:bg-navy-light/50 rounded-full p-1"
                        >
                            <X size={24} />
                        </button>

                        <div className="h-96 w-full bg-slate-100 dark:bg-navy-lighter relative overflow-hidden shrink-0">
                            {project.images && project.images.length > 0 ? (
                                <div className="relative w-full h-full">
                                    <div className="relative w-full h-full">
                                        {project.images.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className={`absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-navy-lighter p-4 transition-opacity duration-300 ${idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                                    }`}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`${project.title} - ${idx + 1}`}
                                                    className="max-w-full max-h-full object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {project.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevSlide}
                                                className="absolute left-4 top-1/3 -translate-y-1/2 bg-white/80 dark:bg-navy/80 hover:bg-white dark:hover:bg-navy text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal p-2 rounded-full transition-all z-10 backdrop-blur-sm"
                                                aria-label="Image précédente"
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button
                                                onClick={nextSlide}
                                                className="absolute right-4 top-1/3 -translate-y-1/2 bg-white/80 dark:bg-navy/80 hover:bg-white dark:hover:bg-navy text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal p-2 rounded-full transition-all z-10 backdrop-blur-sm"
                                                aria-label="Image suivante"
                                            >
                                                <ChevronRight size={24} />
                                            </button>

                                            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-white/80 dark:bg-navy/80 px-3 py-2 rounded-full">
                                                {project.images.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => setCurrentSlide(idx)}
                                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-teal-600 dark:bg-teal w-6' : 'bg-teal-600/40 dark:bg-teal/40 hover:bg-teal-600/70 dark:hover:bg-teal/70'
                                                            }`}
                                                        aria-label={`Aller à l'image ${idx + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <img
                                    src={project.image || `https://placehold.co/1200x600/112240/64ffda?text=${encodeURIComponent(project.title)}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-navy-light via-transparent to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                                <p className="text-teal-600 dark:text-teal font-mono text-sm mb-2">{project.category}</p>
                                <h3 className="text-3xl md:text-4xl font-bold text-navy dark:text-slate-lighter drop-shadow-lg">{project.title}</h3>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 space-y-8">
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-teal-600 dark:text-teal bg-teal-600/10 dark:bg-teal/10 px-3 py-1 rounded-full text-xs font-mono">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-navy dark:text-slate-lighter mb-3">À propos</h4>
                                        <p className="text-slate-700 dark:text-slate-light leading-relaxed">
                                            {project.longDescription || project.description}
                                        </p>
                                    </div>

                                    {project.context && (
                                        <div>
                                            <h4 className="text-xl font-bold text-navy dark:text-slate-lighter mb-3">Contexte & Challenges</h4>
                                            <p className="text-slate-700 dark:text-slate-light leading-relaxed">
                                                {project.context}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    {project.results && (
                                        <div className="bg-slate-100 dark:bg-navy-lighter/30 p-5 rounded-lg border border-teal-600/5 dark:border-teal/5">
                                            <h4 className="text-lg font-bold text-navy dark:text-slate-lighter mb-4 flex items-center">
                                                <CheckCircle size={18} className="text-teal-600 dark:text-teal mr-2" />
                                                Résultats Clés
                                            </h4>
                                            <ul className="space-y-3">
                                                {project.results.map((result, i) => (
                                                    <li key={i} className="text-slate-700 dark:text-slate-light text-sm flex items-start">
                                                        <span className="text-teal-600 dark:text-teal mr-2 mt-1">▹</span>
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex flex-col gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-light text-slate-700 dark:text-slate-light px-4 py-3 rounded hover:border-teal-600 dark:hover:border-teal hover:text-teal-600 dark:hover:text-teal transition-colors font-mono text-sm">
                                                <Github size={18} />
                                                Voir le code
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-teal-600 dark:bg-teal text-white dark:text-navy px-4 py-3 rounded hover:bg-teal-700 dark:hover:bg-teal-light transition-colors font-mono text-sm font-bold">
                                                <ExternalLink size={18} />
                                                Voir le projet
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
