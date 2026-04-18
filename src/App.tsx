import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Experience from './components/Experience';
import Pipeline from './components/Pipeline';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Sidebar />
      <main className="lg:pl-16">
        <Hero />
        <FeaturedWork />
        <Experience />
        <Pipeline />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;