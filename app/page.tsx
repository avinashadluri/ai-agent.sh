import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import SecondaryHeroSection from "@/components/secondary-hero-section";
import AgentSection from "@/components/agent-section";
import WorkflowSection from "@/components/workflow-section";
import FutureSection from "@/components/future-section";
import UseCasesSection from "@/components/use-cases-section";
import ExamplesSection from "@/components/examples-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden px-4 md:px-6 lg:px-8">
      <Navbar />
      <main className="container mx-auto">
        <HeroSection />
        <SecondaryHeroSection />
        <AgentSection />
        <WorkflowSection />
        <FutureSection />
        <UseCasesSection />
        <ExamplesSection />
      </main>
      <Footer />
    </div>
  );
}
