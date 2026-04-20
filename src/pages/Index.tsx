import { LanguageProvider } from "@/contexts/LanguageContext";
import { SonoriaNavbar } from "@/components/sonoria/SonoriaNavbar";
import { SonoriaHero } from "@/components/sonoria/SonoriaHero";
import { SonoriaTrust } from "@/components/sonoria/SonoriaTrust";
import { SonoriaLoom } from "@/components/sonoria/SonoriaLoom";
import { SonoriaProblem } from "@/components/sonoria/SonoriaProblem";
import { SonoriaResults } from "@/components/sonoria/SonoriaResults";
import { SonoriaShift } from "@/components/sonoria/SonoriaShift";
import { SonoriaMethod } from "@/components/sonoria/SonoriaMethod";
import { SonoriaProcess } from "@/components/sonoria/SonoriaProcess";
import { SonoriaResultsFinal } from "@/components/sonoria/SonoriaResultsFinal";
import { SonoriaCTA } from "@/components/sonoria/SonoriaCTA";
import { SonoriaFooter } from "@/components/sonoria/SonoriaFooter";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <SonoriaNavbar />
        <main>
          <SonoriaHero />
          <SonoriaTrust />
          <SonoriaLoom />
          <SonoriaProblem />
          <SonoriaResults />
          <SonoriaShift />
          <SonoriaMethod />
          <SonoriaProcess />
          <SonoriaResultsFinal />
          <SonoriaCTA />
        </main>
        <SonoriaFooter />
      </div>
    </LanguageProvider>
  );
};

export default Index;
