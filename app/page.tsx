import Head from "next/head";
import AboutUs from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description here" />
        {/* Add other meta tags as needed */}
      </Head>
      <Header />
      <section id="home" className="pb-0">
        <Banner />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="contact-us">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
