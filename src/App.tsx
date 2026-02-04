import { Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, CursorGlow } from './components';
import './App.css';

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
