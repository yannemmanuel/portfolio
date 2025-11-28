
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-100 dark:bg-navy min-h-screen text-navy dark:text-slate-light selection:bg-teal selection:text-navy-light transition-colors">
      <Navbar />

      <main className="flex flex-col">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
