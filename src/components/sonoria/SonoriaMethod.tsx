import { motion } from "framer-motion";
import { Database, Search, FileText, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaMethod = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Database,
      title: t("On se connecte à vos documents existants", "We connect to your existing documents"),
      description: t(
        "SharePoint, OneDrive, Google Drive. On accède à vos procédures internes sans déplacer quoi que ce soit.",
        "SharePoint, OneDrive, Google Drive. We access your internal procedures without moving anything."
      ),
    },
    {
      icon: Search,
      title: t("On compare vos documents avec votre norme", "We compare your documents against your standard"),
      description: t(
        "Notre système analyse automatiquement chaque procédure par rapport aux exigences de votre certification. Clause par clause.",
        "Our system automatically analyzes each procedure against your certification requirements. Clause by clause."
      ),
    },
    {
      icon: FileText,
      title: t("Vous recevez le rapport d'écarts complet", "You receive the complete gap report"),
      description: t(
        "La liste précise de ce qui est non-conforme, avec le document concerné et la clause qui pose problème. Votre équipe valide et corrige.",
        "The exact list of what is non-compliant, with the relevant document and the clause at issue. Your team validates and corrects."
      ),
    },
    {
      icon: Eye,
      title: t("Le système surveille en continu", "The system monitors continuously"),
      description: t(
        "Quand vos procédures changent, le système revérifie automatiquement. Vous êtes alerté avant que l'auditeur ne trouve quoi que ce soit.",
        "When your procedures change, the system re-checks automatically. You're alerted before the auditor finds anything."
      ),
    },
  ];

  return (
    <section
      id="solution"
      aria-labelledby="solution-heading"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            {t("Notre approche", "Our approach")}
          </span>
          <h2 id="solution-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Vous ne faites pas la révision manuellement.", "You don't do the review manually.")}
            <br />
            <span className="text-gradient">{t("On détecte tout pour vous.", "We detect everything for you.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Pas de configuration. Pas de formation. Pas de projet IT. On se connecte à vos documents existants et on vous livre un rapport d'écarts complet.",
              "No configuration. No training. No IT project. We connect to your existing documents and deliver a complete gap report."
            )}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-primary font-display font-bold text-lg mb-12"
        >
          {t("100% clé en main. Zéro perturbation de vos opérations.", "100% done for you. Zero disruption to your operations.")}
        </motion.p>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {steps.map((step, index) => (
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
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
