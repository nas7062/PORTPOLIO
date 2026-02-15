import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import Header from './components/Header';
import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';
import ProjectSection from './components/ProjectSection';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center relative overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <div className="z-10 w-full overflow-y-hidden  snap-y snap-mandatory ">
        <Hero />
        <ParallaxSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
