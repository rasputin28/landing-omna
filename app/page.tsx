import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import ProblemSolution from "./components/ProblemSolution";
import Methodology from "./components/Methodology";
import CaseStudies from "./components/CaseStudies";
import DiagnosticIncludes from "./components/DiagnosticIncludes";
import Categories from "./components/Categories";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoBar />
        <ProblemSolution />
        <Methodology />
        <CaseStudies />
        <DiagnosticIncludes />
        <Categories />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
