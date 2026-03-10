import Nav from './components/Nav';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import CompanyGoals from './components/CompanyGoals';
import MarketingGoals from './components/MarketingGoals';
import TopPriorities from './components/TopPriorities';
import OKRSection from './components/OKRSection';
import WhyMe from './components/WhyMe';
import AIOperatingModel from './components/AIOperatingModel';
import ClosingCTA from './components/ClosingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-rz-base text-rz-white">
      <Nav />
      <main>
        <Hero />
        <ExecutiveSummary />
        <CompanyGoals />
        <MarketingGoals />
        <TopPriorities />
        <OKRSection />
        <WhyMe />
        <AIOperatingModel />
        <ClosingCTA />
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-rz-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-rz-subtle text-sm">
          <span className="font-semibold text-rz-muted">Rebiz</span>
          <span>Head of Marketing: Mission & OKRs · Confidential</span>
        </div>
      </footer>
    </div>
  );
}
