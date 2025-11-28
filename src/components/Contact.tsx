
import Section from './Section';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" className="max-w-2xl mx-auto px-6 lg:px-0 text-center mb-20">
            <p className="text-teal-600 dark:text-teal font-mono mb-4">04. Et maintenant ?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-slate-lighter mb-6">Me Contacter</h2>

            <p className="text-slate-700 dark:text-slate-light text-lg mb-10 leading-relaxed">
                Je suis actuellement à la recherche d'un stage de 6 mois en tant que Data Analyst ou Business Intelligence.
                Que vous ayez une question ou simplement envie de dire bonjour, ma boîte de réception est toujours ouverte !
            </p>

            <a
                href="https://wa.me/+2250708030624"
                className="inline-block border-2 border-teal-600 dark:border-teal text-teal-600 dark:text-teal px-8 py-4 rounded hover:bg-teal-600/10 dark:hover:bg-teal/10 transition-all duration-300 font-mono text-lg"
            >
                Dire Bonjour
            </a>

            <div className="mt-20 flex justify-center space-x-8">
                <a href="https://linkedin.com/in/yannandrek" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal hover:-translate-y-1 transition-all duration-300">
                    <Linkedin size={24} />
                </a>
                <a href="https://github.com/yannemmanuel" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal hover:-translate-y-1 transition-all duration-300">
                    <Github size={24} />
                </a>
                <a href="mailto:yannandrekoffi@gmail.com" className="text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal hover:-translate-y-1 transition-all duration-300">
                    <Mail size={24} />
                </a>
            </div>
        </Section>
    );
};

export default Contact;
