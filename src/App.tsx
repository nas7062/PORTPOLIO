import Header from './components/Header';
import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';
import ProjectSection from './components/ProjectSection';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <div className="z-10 w-full">
        <Hero />
        <ParallaxSection />
        <ProjectSection />
        <section id="contact" className="min-h-screen scroll-mt-20">
          CONTACT 섹션
        </section>
      </div>
    </div>
  );
}

export default App;
