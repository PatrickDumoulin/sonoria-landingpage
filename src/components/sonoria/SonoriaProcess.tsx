import { motion } from "framer-motion";
import { Database, Search, FileCheck, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaProcess = () => {
  const { t } = useLanguage();

  const phases = [
    {
      icon: Database,
      days: t("Jour 1–2", "Day 1–2"),
      title: t("On se connecte à vos documents et on configure la norme", "We connect to your documents and configure the standard"),
      description: t(
        "On accède à votre SharePoint ou OneDrive et on importe les exigences de votre certification. Aucune perturbation de vos opérations.",
        "We access your SharePoint or OneDrive and import your certification requirements. No disruption to your operations."
      ),
    },
    {
      icon: Search,
      days: t("Jour 3–4", "Day 3–4"),
      title: t("On lance l'analyse automatique", "We run the automatic analysis"),
      description: t(
        "Notre système compare chaque procédure avec chaque clause de votre norme. On identifie les écarts, les omissions et les contradictions.",
        "Our system compares each procedure against each clause of your standard. We identify gaps, omissions, and contradictions."
      ),
    },
    {
      icon: FileCheck,
      days: t("Jour 5", "Day 5"),
      title: t("On vous livre le rapport complet", "We deliver the complete report"),
      description: t(
        "Liste précise des non-conformités avec le document concerné, la clause applicable et le niveau de priorité. Votre équipe peut commencer à corriger immédiatement.",
        "Precise list of non-conformities with the relevant document, applicable clause, and priority level. Your team can start correcting immediately."
      ),
    },
  ];

  const guarantees = [
    t("Aucune perturbation de vos opérations", "No disruption to your operations"),
    t("Aucun projet IT à gérer", "No IT project to manage"),
    t("Vos documents existants, aucune migration", "Your existing documents, no migration"),
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
            {t("Premier rapport d'écarts en ", "First gap report in ")}
            <span className="text-gradient">{t("5 jours ouvrables.", "5 business days.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Pas de projet de 6 mois. Pas de comité. On se connecte à vos documents et on vous livre le rapport.",
              "No 6-month project. No committee. We connect to your documents and deliver the report."
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
