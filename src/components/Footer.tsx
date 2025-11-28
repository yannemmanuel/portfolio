


import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-slate-700 dark:text-slate text-sm font-mono bg-slate-200 dark:bg-navy-light/30 mt-20">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://linkedin.com/in/yannandrek" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal transition-colors">
                    <Linkedin size={20} />
                </a>
                <a href="https://github.com/yannemmanuel" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal transition-colors">
                    <Github size={20} />
                </a>
                <a href="mailto:yannandrekoffi@gmail.com" className="text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal transition-colors">
                    <Mail size={20} />
                </a>
            </div>
            <p className="hover:text-teal-600 dark:hover:text-teal transition-colors cursor-default mb-2">
                Conçu et développé par André Yann Emmanuel Koffi
            </p>
            <p className="text-xs opacity-70">
                &copy; {new Date().getFullYear()} - Tous droits réservés
            </p>
        </footer>
    );
};

export default Footer;
