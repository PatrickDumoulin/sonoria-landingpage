import { motion, AnimatePresence } from "framer-motion";
import { Database, Search, FileText, Eye, X, ZoomIn } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaMethod = () => {
  const { t } = useLanguage();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

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

        <div className="flex flex-col gap-6 max-w-3xl mx-auto mb-16">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-center text-sm font-semibold text-primary uppercase tracking-wider mb-8">
            {t("À quoi ça ressemble", "What it looks like")}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                src: "/screenshot-procedure.png",
                alt: t("Vue d'une procédure avec étapes et contenu détaillé", "Procedure view with steps and detailed content"),
                delay: 0.1,
                x: -20,
              },
              {
                src: "/screenshot-assistant.png",
                alt: t("Vue de l'assistant répondant à une question sur une procédure de conformité", "Assistant answering a question about a compliance procedure"),
                delay: 0.2,
                x: 20,
              },
            ].map((img) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, x: img.x }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: img.delay }}
                onClick={() => setLightboxSrc(img.src)}
                className="rounded-2xl overflow-hidden border border-border shadow-lg relative group cursor-zoom-in text-left w-full"
                aria-label={t("Agrandir l'image", "Enlarge image")}
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto block" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={() => setLightboxSrc(null)}
              aria-label={t("Fermer", "Close")}
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightboxSrc}
              alt=""
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
