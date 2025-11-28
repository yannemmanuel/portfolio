import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'À Propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-teal-600 dark:text-teal font-mono text-xl font-bold border-2 border-teal-600 dark:border-teal p-2 rounded hover:bg-teal-600/10 dark:hover:bg-teal/10 transition-colors">
                            AYK
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono"
                                >
                                    <span className="text-teal-600 dark:text-teal mr-1">{index + 1}.</span> {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                onClick={toggleTheme}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-teal-600 dark:text-teal hover:text-teal-700 dark:hover:text-white px-3 py-2 rounded-md transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </motion.button>
                            <motion.a
                                href="/CV_Andre_Yann_Koffi.pdf"
                                target="_blank"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="border border-teal-600 dark:border-teal text-teal-600 dark:text-teal px-4 py-2 rounded hover:bg-teal-600/10 dark:hover:bg-teal/10 transition-colors text-sm font-mono"
                            >
                                CV
                            </motion.a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-teal-600 dark:text-teal hover:text-teal-700 dark:hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white dark:bg-navy-light shadow-xl"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-700 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal block px-3 py-2 rounded-md text-base font-medium font-mono"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="text-teal-600 dark:text-teal hover:text-teal-700 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium font-mono flex items-center gap-2"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            <span>{theme === 'dark' ? 'Mode Clair' : 'Mode Sombre'}</span>
                        </button>
                        <a
                            href="/CV_Andre_Yann_Koffi.pdf"
                            target="_blank"
                            className="text-teal-600 dark:text-teal block px-3 py-2 rounded-md text-base font-medium font-mono border border-teal-600 dark:border-teal mt-4 mx-3 text-center"
                        >
                            CV
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
