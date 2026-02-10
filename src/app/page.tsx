import { Nav } from '@/components/Nav';
import { SideDots } from '@/components/SideDots';
import { HashSync } from '@/components/HashSync';
import { ShadeSweep } from '@/components/ShadeSweep';
import { Intro } from '@/components/sections/Intro';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { Playground } from '@/components/sections/Playground';

export default function Home() {
  return (
    <>
      <ShadeSweep />
      <HashSync />
      <Nav />
      <SideDots />
      <main>
        <Intro />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Playground />
      </main>
    </>
  );
}
