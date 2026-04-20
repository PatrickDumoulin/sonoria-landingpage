import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldAlert, UserCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaHero = () => {
  const { t, language } = useLanguage();

  const badges = [
    { icon: Clock, text: t("Moins d'interruptions sur le plancher", "Fewer interruptions on the floor") },
    { icon: ShieldAlert, text: t("Moins d'erreurs de production", "Fewer production errors") },
    { icon: UserCheck, text: t("Employés autonomes dès la première semaine", "Employees independent within the first week") },
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
              {t("Manufacturier & Construction", "Manufacturing & Construction")}
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
              "Vos procédures existent. Personne ne les utilise.",
              "Your procedures exist. Nobody uses them."
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            {t(
              "Pendant ce temps, vos employés s'interrompent les uns les autres, font des erreurs évitables, et vos nouveaux prennent des semaines à devenir autonomes.",
              "Meanwhile, your employees interrupt each other, make avoidable mistakes, and new hires take weeks to get up to speed."
            )}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-foreground/80 max-w-3xl mx-auto mb-10 font-display font-semibold"
          >
            {t(
              "On prend vos documents, vidéos et savoir-faire — et on en fait un système que vos employés utilisent vraiment. En 14 jours. Sans effort de votre part.",
              "We take your documents, videos, and know-how — and turn them into a system your employees actually use. In 14 days. Zero effort on your end."
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
              aria-label={t("Réserver un appel de 10 minutes", "Book a 10-minute call")}
            >
              {t("Réserver un appel de 10 min — c'est gratuit", "Book a free 10-min call")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <p className="text-sm text-muted-foreground mt-3">
              {t("Pas de vente. On regarde ensemble où vous perdez du temps.", "No sales pitch. We look together at where you're losing time.")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
