import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaShift = () => {
  const { t } = useLanguage();

  const oldWays = [
    t("La révision de conformité se fait manuellement, fichier par fichier", "Compliance review is done manually, file by file"),
    t("Les non-conformités sont découvertes par l'auditeur, pas par vous", "Non-conformities are found by the auditor, not by you"),
    t("La vérification prend des semaines et personne ne veut s'en occuper", "The review takes weeks and nobody wants to deal with it"),
    t("Quand la norme change, vous ne savez pas exactement ce qui doit changer chez vous", "When the standard changes, you don't know exactly what needs to change for you"),
    t("Votre équipe qualité passe son temps sur de la vérification au lieu d'amélioration", "Your quality team spends its time on verification instead of improvement"),
  ];

  const newWays = [
    t("Les écarts sont détectés automatiquement, avant que l'auditeur arrive", "Gaps are detected automatically, before the auditor arrives"),
    t("Votre équipe reçoit la liste précise de ce qui doit être corrigé", "Your team receives the exact list of what needs to be corrected"),
    t("La révision de conformité passe de semaines à quelques heures", "Compliance review goes from weeks to a few hours"),
    t("Quand la norme change, vous savez exactement ce qui doit changer", "When the standard changes, you know exactly what needs to change"),
    t("Votre équipe qualité se concentre sur la correction, pas sur la recherche", "Your quality team focuses on fixing, not searching"),
  ];

  return (
    <section 
      id="transformation"
      aria-labelledby="shift-heading"
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
            {t("Le changement", "The shift")}
          </span>
          <h2 id="shift-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Imaginez votre prochain audit ", "Imagine your next audit ")}
            <span className="text-gradient">{t("sans préparation de dernière minute.", "without last-minute preparation.")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-destructive/20"
          >
            <h3 className="font-display text-lg font-bold text-destructive mb-6">
              {t("Aujourd'hui", "Today")}
            </h3>
            <div className="flex flex-col gap-4">
              {oldWays.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-primary/20"
          >
            <h3 className="font-display text-lg font-bold text-primary mb-6">
              {t("Avec Sonoria", "With Sonoria")}
            </h3>
            <div className="flex flex-col gap-4">
              {newWays.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
