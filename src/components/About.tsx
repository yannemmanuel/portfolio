import Section from './Section';
import profileImg from '../assets/profile.jpg';
import { Globe, Car, Heart } from 'lucide-react';

const About = () => {
    return (
        <Section id="about" className="max-w-4xl mx-auto px-6 lg:px-0">
            <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-navy dark:text-slate-lighter flex items-center">
                    <span className="text-teal-600 dark:text-teal font-mono text-xl mr-2">01.</span> À Propos
                </h2>
                <div className="h-px bg-slate-300 dark:bg-navy-lighter flex-grow ml-4 max-w-xs"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 text-slate-700 dark:text-slate-light text-lg leading-relaxed space-y-6">
                    <p>
                        Étudiant en Master 2 en double diplomation <span className="text-teal-600 dark:text-teal">MIAGE</span> (UFHB / Université Rennes), je transforme les données en insights actionnables grâce à <span className="text-teal-600 dark:text-teal">Power BI</span> et <span className="text-teal-600 dark:text-teal">SQL</span>.
                    </p>
                    <p>
                        Je peux vous aider à <span className="text-teal-600 dark:text-teal">automatiser vos reportings</span>, créer des tableaux de bord interactifs, et optimiser vos processus d'analyse de données pour faciliter la prise de décision stratégique.
                    </p>
                    <p>
                        Rigoureux, autonome et passionné par la Business Intelligence, je cherche un stage où je pourrai apporter une réelle valeur ajoutée tout en continuant à développer mes compétences.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 mt-6 border-t border-slate-300 dark:border-navy-lighter">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-teal-600 dark:text-teal font-mono text-sm font-bold flex items-center gap-2">
                                <Globe size={16} /> Langues
                            </h4>
                            <ul className="text-sm text-slate-700 dark:text-slate-light space-y-1">
                                <li>Français (Natif)</li>
                                <li>Anglais (Académique)</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-teal-600 dark:text-teal font-mono text-sm font-bold flex items-center gap-2">
                                <Car size={16} /> Mobilité
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-light">Permis AB</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-teal-600 dark:text-teal font-mono text-sm font-bold flex items-center gap-2">
                                <Heart size={16} /> Intérêts
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-light">Lecture, Voyage, Musique</p>
                        </div>
                    </div>
                </div>

                <div className="relative group md:col-span-1 h-fit max-w-xs mx-auto md:mx-0 md:mt-0 mt-10">
                    <div className="absolute inset-0 bg-teal-600 dark:bg-teal rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <div className="relative z-10 bg-white dark:bg-navy-light p-1 rounded border-2 border-teal-600/20 dark:border-teal/20 group-hover:border-teal-600 dark:group-hover:border-teal transition-colors duration-300 flex items-center justify-center overflow-hidden">
                        <img
                            src={profileImg}
                            alt="Portrait"
                            className="w-full h-auto object-cover rounded aspect-square"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
