import { motion } from "framer-motion";
import { Zap, BarChart2, ShieldCheck, BookOpen, TrendingUp, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaResultsFinal = () => {
  const { t } = useLanguage();

  const results = [
    {
      icon: Zap,
      text: t(
        "Votre équipe libérée des tâches répétitives à faible valeur — concentrée sur ce qui fait vraiment avancer la production",
        "Your team freed from low-value repetitive tasks — focused on what actually moves production forward"
      ),
    },
    {
      icon: ShieldCheck,
      text: t(
        "Des problèmes de qualité détectés en temps réel, avant qu'ils deviennent des rappels ou des pertes de clients",
        "Quality issues detected in real time, before they become recalls or lost clients"
      ),
    },
    {
      icon: BarChart2,
      text: t(
        "Des décisions opérationnelles appuyées sur vos données — pas sur l'instinct ou l'expérience de quelqu'un",
        "Operational decisions backed by your data — not on instinct or someone's experience"
      ),
    },
    {
      icon: Layers,
      text: t(
        "Une traçabilité automatisée pour la conformité HACCP, ISO et CCQ — sans saisie manuelle chaque semaine",
        "Automated traceability for HACCP, ISO, and CCQ compliance — no manual data entry every week"
      ),
    },
    {
      icon: BookOpen,
      text: t(
        "Vos nouveaux employés autonomes en jours, pas en semaines — votre savoir-faire capturé et accessible à tous",
        "New employees independent in days, not weeks — your know-how captured and accessible to everyone"
      ),
    },
    {
      icon: TrendingUp,
      text: t(
        "Des systèmes qui grandissent avec vous — sans tout recommencer à zéro à chaque phase de croissance",
        "Systems that scale with you — without starting over from scratch at every growth phase"
      ),
    },
  ];

  return (
    <section
      id="resultats"
      aria-labelledby="results-heading"
      className="py-24 bg-background relative overflow-hidden"
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
            {t("Les résultats", "The results")}
          </span>
          <h2 id="results-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Ce que ça change ", "What this changes ")}
            <span className="text-gradient">{t("dans vos opérations.", "in your operations.")}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <result.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <p className="font-display text-sm font-semibold text-foreground leading-relaxed">{result.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xl text-foreground font-display font-semibold max-w-3xl mx-auto"
        >
          {t(
            "Des opérations plus intelligentes. Une équipe plus efficace. Un avantage concurrentiel qui se construit dans le temps.",
            "Smarter operations. A more effective team. A competitive advantage that compounds over time."
          )}
        </motion.p>
      </div>
    </section>
  );
};
