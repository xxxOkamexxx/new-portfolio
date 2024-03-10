import { Navbar, Footer } from "@/components"; 
import { About, Contact, Hero, Projects } from "@/sections";
export default function Home() {
  return (
    <main className={`bg-neutralLight overflow-hidden`}>
      <div id='home' className="hidden md:block circle01 z-0" />

      <div className="z-10">
        <div>
          <Navbar />
        </div>

        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
