import { motion } from "framer-motion";
import { TrendingDown, AlertCircle, Database, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaResults = () => {
  const { t } = useLanguage();

  const costs = [
    {
      icon: TrendingDown,
      stat: t("15–25 %", "15–25%"),
      title: t("de capacité perdue en tâches manuelles à faible valeur", "of capacity lost to low-value manual tasks"),
      description: t(
        "Entrée de données, rapports manuels, recherche d'information. Des tâches que vos meilleurs employés font encore à la main — et qui pourraient être automatisées.",
        "Data entry, manual reports, searching for information. Tasks your best employees still do by hand — and that could be automated."
      ),
    },
    {
      icon: AlertCircle,
      stat: t("5 000 $ à 50 000 $", "$5,000–$50,000"),
      title: t("le coût moyen d'un problème qualité non détecté à temps", "the average cost of a quality issue detected too late"),
      description: t(
        "Rappel de produits, reprise de production, perte d'un client. La plupart de ces erreurs auraient pu être prévenues avec la bonne visibilité en temps réel.",
        "Product recall, production rework, lost client. Most of these errors could have been prevented with the right real-time visibility."
      ),
    },
    {
      icon: Database,
      stat: t("80 %", "80%"),
      title: t("des données opérationnelles jamais analysées", "of operational data never analyzed"),
      description: t(
        "Vous générez des données de production, de qualité et d'inventaire chaque jour. La plupart dorment dans des fichiers que personne ne consulte.",
        "You generate production, quality, and inventory data every day. Most of it sits unused in files nobody looks at."
      ),
    },
    {
      icon: Clock,
      stat: t("3 à 5 ans", "3 to 5 years"),
      title: t("d'avance que vos concurrents accumulent pendant que vous attendez", "head start your competitors build while you wait"),
      description: t(
        "L'IA dans l'industrie n'est plus une tendance — c'est un avantage concurrentiel qui se construit dès maintenant. Chaque mois d'attente élargit l'écart.",
        "AI in industry is no longer a trend — it's a competitive advantage being built right now. Every month you wait widens the gap."
      ),
    },
  ];

  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
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
            {t("Le coût réel", "The real cost")}
          </span>
          <h2 id="impact-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Combien ça vous coûte ", "What is it costing you ")}
            <span className="text-gradient">{t("de ne pas faire ce virage ?", "to miss this shift?")}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {costs.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <cost.icon className="w-6 h-6 text-destructive" aria-hidden="true" />
                </div>
                <span className="font-display text-2xl font-bold text-destructive">{cost.stat}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{cost.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cost.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          {t(
            "Ces coûts sont réels, mais invisibles. Personne ne les mesure — et c'est exactement pourquoi ils persistent.",
            "These costs are real, but invisible. Nobody measures them — and that's exactly why they persist."
          )}
        </motion.p>
      </div>
    </section>
  );
};
