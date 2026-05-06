import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Hero, StatsSection, ServicesSection, PhilosophySection, ProcessSection, FAQSection, FinalCTA } from './components/sections';
import { AboutPage, ContactPage } from './pages';
import './styles/variables.css';

function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <PhilosophySection />
      <ProcessSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;