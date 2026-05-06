import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { Layout } from './components/layout';
import { Hero, StatsSection, ServicesSection, DigitalSolutions, PhilosophySection, ProcessSection, FAQSection, FinalCTA } from './components/sections';
import { AboutPage, ContactPage, SolutionsPage } from './pages';
import './styles/variables.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <DigitalSolutions />
      <PhilosophySection />
      <ProcessSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <><ScrollToTop /><Layout /></>,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'solutions', element: <SolutionsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;