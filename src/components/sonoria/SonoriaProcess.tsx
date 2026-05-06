import { motion } from "framer-motion";
import { Search, Wrench, TrendingUp, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaProcess = () => {
  const { t } = useLanguage();

  const phases = [
    {
      icon: Search,
      days: t("Semaine 1–2", "Week 1–2"),
      title: t("Diagnostic opérationnel", "Operational diagnostic"),
      description: t(
        "On passe du temps sur votre plancher. On cartographie vos processus existants et on identifie les 3 opportunités IA à plus fort impact — celles qui vont générer des résultats mesurables rapidement.",
        "We spend time on your shop floor. We map your existing processes and identify the top 3 highest-impact AI opportunities — the ones that will generate measurable results quickly."
      ),
    },
    {
      icon: Wrench,
      days: t("Semaine 3–8", "Week 3–8"),
      title: t("Intégration sur mesure", "Custom integration"),
      description: t(
        "On construit et intègre la solution dans vos systèmes existants. Pas un outil générique — quelque chose fait pour votre réalité, votre équipe, et vos processus spécifiques.",
        "We build and integrate the solution into your existing systems. Not a generic tool — something made for your reality, your team, and your specific processes."
      ),
    },
    {
      icon: TrendingUp,
      days: t("Mois 2+", "Month 2+"),
      title: t("Mesure des résultats et optimisation", "Results measurement and optimization"),
      description: t(
        "On suit les résultats avec vous. On mesure l'impact réel sur vos opérations, on ajuste ce qui peut être amélioré, et on s'assure que l'investissement se justifie — en chiffres.",
        "We track results with you. We measure the real impact on your operations, adjust what can be improved, and make sure the investment is justified — in numbers."
      ),
    },
  ];

  const guarantees = [
    t("Aucune perturbation de vos opérations", "No disruption to your operations"),
    t("Solutions intégrées à vos systèmes existants", "Solutions integrated into your existing systems"),
    t("Résultats mesurables, pas des promesses", "Measurable results, not promises"),
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
            {t("Comment on travaille", "How we work")}
          </span>
          <h2 id="process-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Du diagnostic ", "From diagnostic ")}
            <span className="text-gradient">{t("aux résultats mesurables.", "to measurable results.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Pas de projet de 18 mois. Pas de comité. On commence par ce qui génère le plus de valeur pour vous, et on livre vite.",
              "No 18-month project. No committee. We start with what generates the most value for you, and we deliver fast."
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
                  <phase.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
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
              <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-medium">{guarantee}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
