import { Nav } from "@/components/forge/Nav";
import { Hero } from "@/components/forge/Hero";
import { Manifesto } from "@/components/forge/Manifesto";
import { Programs } from "@/components/forge/Programs";
import { Coaches } from "@/components/forge/Coaches";
import { Stories } from "@/components/forge/Stories";
import { Facility } from "@/components/forge/Facility";
import { Schedule } from "@/components/forge/Schedule";
import { Booking } from "@/components/forge/Booking";
import { Footer } from "@/components/forge/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Programs />
        <Coaches />
        <Stories />
        <Facility />
        <Schedule />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
