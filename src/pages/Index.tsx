import { LanguageProvider } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SonoriaNavbar } from "@/components/sonoria/SonoriaNavbar";
import { SonoriaHero } from "@/components/sonoria/SonoriaHero";
import { SonoriaTrust } from "@/components/sonoria/SonoriaTrust";
import { SonoriaProblem } from "@/components/sonoria/SonoriaProblem";
import { SonoriaResults } from "@/components/sonoria/SonoriaResults";
import { SonoriaShift } from "@/components/sonoria/SonoriaShift";
import { SonoriaMethod } from "@/components/sonoria/SonoriaMethod";
import { SonoriaProcess } from "@/components/sonoria/SonoriaProcess";
import { SonoriaProducts } from "@/components/sonoria/SonoriaProducts";
import { SonoriaResultsFinal } from "@/components/sonoria/SonoriaResultsFinal";
import { SonoriaCTA } from "@/components/sonoria/SonoriaCTA";
import { SonoriaFooter } from "@/components/sonoria/SonoriaFooter";

const IndexMeta = () => {
  usePageMeta({
    title: "Sonoria | Automatisation IA pour PME manufacturière — Québec",
    description: "Sonoria déploie l'IA dans les PME manufacturières, agroalimentaires et de construction au Québec. Automatisation des processus, intelligence opérationnelle et savoir-faire numérique. Résultats mesurables en 90 jours, zéro perturbation.",
    canonical: "https://sonoria.ca/",
    ogTitle: "Sonoria | L'IA qui fait vraiment avancer vos opérations",
    ogDescription: "Sonoria déploie l'IA dans les PME manufacturières, agroalimentaires et de construction. Automatisation des processus, tableaux de bord en temps réel, savoir-faire numérique. Plus de 700 000 $ de valeur opérationnelle générée.",
  });
  return null;
};

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <IndexMeta />
        <SonoriaNavbar />
        <main>
          <SonoriaHero />
          <SonoriaTrust />
          <SonoriaProblem />
          <SonoriaResults />
          <SonoriaShift />
          <SonoriaMethod />
          <SonoriaProcess />
          <SonoriaProducts />
          <SonoriaResultsFinal />
          <SonoriaCTA />
        </main>
        <SonoriaFooter />
      </div>
    </LanguageProvider>
  );
};

export default Index;
