import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <ScrollProgress />
      <div className="z-10 w-full">
        <Hero />
        <ParallaxSection />
        <ParallaxSection />
        <ParallaxSection />
      </div>
    </div>
  );
}

export default App;
