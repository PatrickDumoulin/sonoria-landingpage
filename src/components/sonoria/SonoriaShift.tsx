import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaShift = () => {
  const { t } = useLanguage();

  const oldWays = [
    t("Des processus manuels répétitifs qui mangent la capacité de votre équipe", "Repetitive manual processes eating your team's capacity"),
    t("Des données de production dans des Excel que personne ne consulte", "Production data sitting in spreadsheets nobody looks at"),
    t("Des décisions prises à l'instinct, avec peu de visibilité sur le terrain", "Decisions made on gut feel with little visibility into what's happening"),
    t("Des problèmes de qualité détectés après coup, une fois le dommage fait", "Quality issues detected after the fact, once the damage is done"),
    t("Des outils technologiques déconnectés de votre réalité opérationnelle", "Tech tools disconnected from your operational reality"),
  ];

  const newWays = [
    t("Des processus automatisés — votre équipe concentrée sur ce qui crée de la valeur", "Automated processes — your team focused on what creates value"),
    t("Vos données en temps réel, visibles et exploitables par tout le monde", "Your data in real time, visible and actionable by everyone"),
    t("Des décisions appuyées sur vos vrais chiffres opérationnels", "Decisions backed by your real operational numbers"),
    t("Des alertes proactives avant que le problème survient et coûte cher", "Proactive alerts before the problem occurs and becomes costly"),
    t("Des solutions sur mesure qui s'intègrent à votre façon de travailler", "Custom solutions that fit the way you actually work"),
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
            {t("Imaginez vos opérations ", "Imagine your operations ")}
            <span className="text-gradient">{t("avec la bonne IA intégrée.", "with the right AI integrated.")}</span>
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
