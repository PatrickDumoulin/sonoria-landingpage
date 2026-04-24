import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldAlert, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaHero = () => {
  const { t, language } = useLanguage();

  const badges = [
    { icon: ShieldAlert, text: t("Zéro surprise à l'audit", "Zero surprises at your audit") },
    { icon: Clock, text: t("40 heures par mois réduites à quelques heures", "40 hours per month reduced to a few") },
    { icon: FileText, text: t("Rapport d'écarts prêt en quelques minutes", "Gap report ready in minutes") },
  ];

  return (
    <section 
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24"
    >
      <div className="absolute inset-0 gradient-hero" aria-hidden="true" />
      <div className="absolute inset-0 gradient-glow opacity-60" aria-hidden="true" />
      
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              {t("Pour les entreprises certifiées ISO, SQF, CNESST", "For ISO, SQF, CNESST certified companies")}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            {t(
              "Votre prochaine révision de conformité. En quelques heures, pas en semaines.",
              "Your next compliance review. Done in hours, not weeks."
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            {t(
              "En ce moment, votre équipe passe des dizaines d'heures chaque année à comparer manuellement vos procédures avec les exigences de votre norme. On automatise ça.",
              "Right now, your team spends dozens of hours every year manually comparing your procedures against your certification requirements. We automate that."
            )}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-foreground/80 max-w-3xl mx-auto mb-10 font-display font-semibold"
          >
            {t(
              "On connecte vos documents existants à votre norme de certification. On détecte les écarts automatiquement. Votre équipe valide et corrige, elle ne cherche plus.",
              "We connect your existing documents to your certification standard. We detect gaps automatically. Your team validates and corrects, no more searching."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">
                <badge.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                {badge.text}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <a
              href="https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity text-lg"
              aria-label={t("Réserver un diagnostic de conformité gratuit", "Book a free compliance diagnostic")}
            >
              {t("Réserver un diagnostic de conformité gratuit", "Book a free compliance diagnostic")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <p className="text-sm text-muted-foreground mt-3">
              {t("Pas de vente. On regarde ensemble où vous êtes exposés.", "No sales pitch. We look together at where you're exposed.")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
