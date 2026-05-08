import { useEffect, lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { Layout } from './components/layout';
import { Hero, StatsSection, ServicesSection, DigitalSolutions, PhilosophySection, ProcessSection, FAQSection, FinalCTA } from './components/sections';
import { ErrorBoundary } from './components/ui';
import './styles/variables.css';

const AboutPage = lazy(() => import('./pages/About').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/Contact').then(m => ({ default: m.ContactPage })));
const SolutionsPage = lazy(() => import('./pages/Solutions').then(m => ({ default: m.SolutionsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFoundPage })));

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
      { path: 'about', element: <Suspense fallback={null}><AboutPage /></Suspense> },
      { path: 'contact', element: <Suspense fallback={null}><ContactPage /></Suspense> },
      { path: 'solutions', element: <Suspense fallback={null}><SolutionsPage /></Suspense> },
    ],
  },
  {
    path: '*',
    element: <Suspense fallback={null}><NotFoundPage /></Suspense>,
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;