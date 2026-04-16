import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import CaseStudies from "./components/CaseStudies";
import Categories from "./components/Categories";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <Methodology />
        <CaseStudies />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
