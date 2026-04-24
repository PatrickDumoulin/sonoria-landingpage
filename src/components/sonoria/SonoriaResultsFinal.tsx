import { motion } from "framer-motion";
import { Clock, Shield, ShieldAlert, TrendingUp, Zap, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaResultsFinal = () => {
  const { t } = useLanguage();

  const results = [
    {
      icon: Clock,
      text: t("Votre équipe qualité passe de semaines à quelques heures sur la révision annuelle", "Your quality team goes from weeks to a few hours on the annual review"),
    },
    {
      icon: Shield,
      text: t("Vous arrivez à votre audit avec un dossier complet, sans préparation de dernière minute", "You arrive at your audit with a complete file, without last-minute preparation"),
    },
    {
      icon: ShieldAlert,
      text: t("Les non-conformités sont détectées avant l'auditeur, pas par lui", "Non-conformities are detected before the auditor, not by them"),
    },
    {
      icon: TrendingUp,
      text: t("Quand votre norme se met à jour, vous savez exactement ce qui change dans vos procédures", "When your standard updates, you know exactly what changes in your procedures"),
    },
    {
      icon: Zap,
      text: t("Votre responsable qualité se concentre sur l'amélioration continue, pas sur la vérification manuelle", "Your quality manager focuses on continuous improvement, not manual checking"),
    },
    {
      icon: CheckCircle,
      text: t("Zéro surprise à l'audit, zéro stress de dernière minute", "Zero audit surprises, zero last-minute stress"),
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
            <span className="text-gradient">{t("avant et après votre audit.", "before and after your audit.")}</span>
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
            "Une équipe qualité qui prépare les audits en quelques heures. Et un auditeur qui ne trouve plus rien que vous n'avez pas déjà corrigé.",
            "A quality team that prepares for audits in hours. And an auditor who finds nothing you haven't already fixed."
          )}
        </motion.p>
      </div>
    </section>
  );
};
