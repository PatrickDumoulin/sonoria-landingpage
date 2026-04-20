import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaFooter = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer role="contentinfo" className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg font-bold text-foreground">
              SONORIA<span className="text-primary">.</span>
            </span>
          </div>
          
          <nav aria-label={t("Navigation du pied de page", "Footer navigation")} className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#probleme" className="hover:text-foreground transition-colors">{t("Problème", "Problem")}</a>
            <a href="#impact" className="hover:text-foreground transition-colors">{t("Coût", "Cost")}</a>
            <a href="#solution" className="hover:text-foreground transition-colors">{t("Solution", "Solution")}</a>
            <a href="#processus" className="hover:text-foreground transition-colors">{t("Processus", "Process")}</a>
            <a href="#resultats" className="hover:text-foreground transition-colors">{t("Résultats", "Results")}</a>
          </nav>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{t("Une verticale de", "A vertical of")}</span>
            <a href="/" className="font-display font-semibold text-foreground hover:text-primary transition-colors" rel="author">
              Dumoulin Solutions
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            <span itemScope itemType="https://schema.org/Organization">
              © {currentYear} <span itemProp="name">Sonoria</span>. {t("Tous droits réservés.", "All rights reserved.")}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
