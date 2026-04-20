import { motion } from "framer-motion";
import { Search, Mic, FileCheck, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaProcess = () => {
  const { t } = useLanguage();

  const phases = [
    {
      icon: Search,
      days: t("Jour 1–3", "Day 1–3"),
      title: t("On identifie vos procédures les plus critiques", "We identify your most critical procedures"),
      description: t(
        "On cible les tâches qui causent le plus d'interruptions, d'erreurs et de temps perdu. Pas besoin de tout documenter — on commence par ce qui compte.",
        "We target the tasks causing the most interruptions, errors, and lost time. No need to document everything — we start with what matters."
      ),
    },
    {
      icon: Mic,
      days: t("Jour 4–10", "Day 4–10"),
      title: t("On capture le savoir de vos experts", "We capture your experts' knowledge"),
      description: t(
        "On s'assoit avec vos employés clés — 30 minutes max. On enregistre, on pose les bonnes questions, on ne les ralentit pas.",
        "We sit with your key employees — 30 minutes max. We record, ask the right questions, and don't slow them down."
      ),
    },
    {
      icon: FileCheck,
      days: t("Jour 10–14", "Day 10–14"),
      title: t("On livre votre système, prêt à utiliser", "We deliver your system, ready to use"),
      description: t(
        "Procédures structurées, chat intelligent configuré, formation rapide de votre équipe. C'est en place et fonctionnel.",
        "Structured procedures, smart chat configured, quick team training. It's in place and working."
      ),
    },
  ];

  const guarantees = [
    t("Aucune perturbation de vos opérations", "No disruption to your operations"),
    t("Aucun projet IT à gérer", "No IT project to manage"),
    t("30 minutes max de temps de vos employés", "30 minutes max of your employees' time"),
  ];

  return (
    <section 
      id="processus" 
      aria-labelledby="process-heading"
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            {t("Comment ça marche", "How it works")}
          </span>
          <h2 id="process-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Opérationnel en ", "Operational in ")}
            <span className="text-gradient">{t("14 jours.", "14 days.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Pas de projet de 6 mois. Pas de comité. En deux semaines, votre équipe a un système qui fonctionne.",
              "No 6-month project. No committee. In two weeks, your team has a working system."
            )}
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto mb-12">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                  <phase.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <span className="text-primary text-sm font-bold mb-1 block">{phase.days}</span>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center gap-2 text-foreground">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-medium">{guarantee}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
