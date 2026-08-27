import { Hero } from "./components/Hero";
import { WhoWeAre } from "./components/WhoWeAre";
import { TrustBar } from "./components/TrustBar";
import { IntentGrid } from "./components/IntentGrid";
import { ServicesGrid } from "./components/ServicesGrid";
import { PainSection } from "./components/PainSection";
import { ReformScope } from "./components/ReformScope";
import { HowItWorks } from "./components/HowItWorks";
import { IdeaToReform } from "./components/IdeaToReform";
import { TechnicalInterventions } from "./components/TechnicalInterventions";
import { Checklist } from "./components/Checklist";
import { AboutART } from "./components/AboutART";
import { NBR16280 } from "./components/NBR16280";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { ContactForm } from "./components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <TrustBar />
      <IntentGrid />
      <ServicesGrid />
      <PainSection />
      <ReformScope />
      <HowItWorks />
      <IdeaToReform />
      <TechnicalInterventions />
      <Checklist />
      <AboutART />
      <NBR16280 />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ContactForm />
    </>
  );
}
