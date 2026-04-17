import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemAndCost from "./components/ProblemAndCost";
import PromisedLand from "./components/PromisedLand";
import WhyNow from "./components/WhyNow";
import CaseStudies from "./components/CaseStudies";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemAndCost />
        <PromisedLand />
        <WhyNow />
        <CaseStudies />
        <About />
        <ContactForm />
      </main>
    </>
  );
}
