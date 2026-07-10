import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RunningBanner } from './components/RunningBanner';
import { Services } from './components/Services';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <div className="bg-gradient-to-r from-blue-100/90 via-sky-50/80 to-white">
          <Hero />
          <RunningBanner />
          <Services />
          <About />
        </div>
        <Journey />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
