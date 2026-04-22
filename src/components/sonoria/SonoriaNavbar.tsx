import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import sonoriaLogo from "@/assets/sonoria-logo.png";

export const SonoriaNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const isFrench = language === "fr";

  const calendlyUrl = "https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte";

  const navItems = [
    { name: t("Problème", "Problem"), href: "#probleme" },
    { name: t("Coût", "Cost"), href: "#impact" },
    { name: t("Solution", "Solution"), href: "#solution" },
    { name: t("Processus", "Process"), href: "#processus" },
    { name: t("Résultats", "Results"), href: "#resultats" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      role="banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2" aria-label="Sonoria - Accueil">
            <img src={sonoriaLogo} alt="Sonoria" className="h-8 w-auto" width="32" height="32" loading="eager" />
            <span className="font-display text-xl font-bold text-foreground" aria-hidden="true">
              SONORIA<span className="text-primary">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label={t("Navigation principale", "Main navigation")}>
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors text-sm font-medium text-primary"
              aria-label={isFrench ? "Switch to English" : "Passer en français"}
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              {isFrench ? "EN" : "FR"}
            </button>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              {t("Diagnostic gratuit", "Free diagnostic")}
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t("Fermer le menu", "Close menu") : t("Ouvrir le menu", "Open menu")}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav id="mobile-nav" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} aria-label={t("Navigation mobile", "Mobile navigation")} className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg z-50">
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors text-base font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 text-sm font-medium text-primary w-fit"
                aria-label={isFrench ? "Switch to English" : "Passer en français"}
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                {isFrench ? "EN" : "FR"}
              </button>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg gradient-primary text-primary-foreground font-medium text-sm text-center" onClick={() => setIsMobileMenuOpen(false)}>
                {t("Diagnostic gratuit", "Free diagnostic")}
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
