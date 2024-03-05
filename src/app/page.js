import { Navbar, Footer } from "@/components"; 
import { About, Contact, Hero, Projects } from "@/sections";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
     
    </main>
  );
}
