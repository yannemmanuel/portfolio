
import { motion } from 'framer-motion';
import { Mail, MapPin, FileText } from 'lucide-react';
import { useState } from 'react';
import CVModal from './CVModal';

const Hero = () => {
    const [showCV, setShowCV] = useState(false);

    return (
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-20 pt-20">
            <div className="max-w-5xl w-full">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-teal-600 dark:text-teal font-mono mb-5 text-lg"
                >
                    Bonjour, je m'appelle
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-navy dark:text-slate-lighter mb-4 leading-tight"
                >
                    André Yann Emmanuel Koffi.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl font-bold text-slate-700 dark:text-slate mb-8 leading-tight"
                >
                    Étudiant Master 2 MIAGE <br />
                    <span className="text-teal-600 dark:text-teal">Aspirant Data Analyst & Business Analyst</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-700 dark:text-slate-light text-xl max-w-2xl mb-10 leading-relaxed"
                >
                    À la recherche d'un <span className="text-teal-600 dark:text-teal">stage de 6 mois</span> en Data & BI. Prêt à transformer vos données en leviers de croissance dès aujourd'hui.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                    <a
                        href="mailto:yannandrekoffi@gmail.com"
                        className="bg-transparent border-2 border-teal-600 dark:border-teal text-teal-600 dark:text-teal px-8 py-4 rounded hover:bg-teal-600/10 dark:hover:bg-teal/10 transition-all duration-300 font-mono text-lg flex items-center gap-2"
                    >
                        <Mail size={20} />
                        Me contacter
                    </a>

                    <button
                        onClick={() => setShowCV(true)}
                        className="bg-teal-600 dark:bg-teal text-white dark:text-navy border-2 border-teal-600 dark:border-teal px-8 py-4 rounded hover:bg-teal-700 dark:hover:bg-teal-light transition-all duration-300 font-mono text-lg flex items-center gap-2 font-bold"
                    >
                        <FileText size={20} />
                        Mon CV
                    </button>

                    <div className="flex items-center text-slate-700 dark:text-slate-light font-mono md:ml-4">
                        <MapPin size={20} className="text-teal-600 dark:text-teal mr-2" />
                        Abidjan, Côte d'Ivoire
                    </div>
                </motion.div>
            </div>
            <CVModal isOpen={showCV} onClose={() => setShowCV(false)} />
        </section>
    );
};

export default Hero;
