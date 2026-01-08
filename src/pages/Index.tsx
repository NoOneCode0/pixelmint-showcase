import { Header } from "@/components/Header";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <WorkShowcase />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
