import Header from './components/Header';
import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <ScrollProgress />
      <Header />
      <div className="z-10 w-full">
        <Hero />
        <ParallaxSection />
        <section id="project" className="min-h-screen scroll-mt-20">
          PROJECT 섹션
        </section>
        <section id="contact" className="min-h-screen scroll-mt-20">
          CONTACT 섹션
        </section>
      </div>
    </div>
  );
}

export default App;
