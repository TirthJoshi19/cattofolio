import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Nav from './components/Navbar/Nav';
import Skills from './components/skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import Work from './components/Work/Work';
import O from './components/Contact/o';
import { NavPanel } from './components/Navbar/Nav';

export default function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <Testimonials />
      <Skills />
      <Contact />
    </div>
  );
}
