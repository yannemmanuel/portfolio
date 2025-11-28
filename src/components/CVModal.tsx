import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CVModal = ({ isOpen, onClose }: CVModalProps) => {
    const cvUrl = "/CV_Andre_Yann_Koffi.pdf";

    return (
        <AnimatePresence>
            {isOpen && (
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
                        className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-navy-light rounded-lg shadow-2xl flex flex-col border border-slate-200 dark:border-teal/20"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-navy-lighter">
                            <h3 className="text-xl font-bold text-navy dark:text-slate-lighter">Mon CV</h3>
                            <div className="flex items-center gap-4">
                                <a
                                    href={cvUrl}
                                    download="CV_Andre_Yann_Koffi.pdf"
                                    className="flex items-center gap-2 bg-teal-600 dark:bg-teal text-white dark:text-navy px-4 py-2 rounded font-bold hover:bg-teal-700 dark:hover:bg-teal-light transition-colors"
                                >
                                    <Download size={18} />
                                    Télécharger
                                </a>
                                <button
                                    onClick={onClose}
                                    className="text-slate-500 dark:text-slate-light hover:text-teal-600 dark:hover:text-teal transition-colors p-1"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        <div className="flex-grow bg-slate-100 dark:bg-white/5 p-1">
                            <iframe
                                src={cvUrl}
                                className="w-full h-full rounded"
                                title="CV Preview"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CVModal;
