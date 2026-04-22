import { motion, AnimatePresence } from "framer-motion";
import { Upload, Layers, MessageSquareText, Rocket, X, ZoomIn } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaMethod = () => {
  const { t } = useLanguage();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const steps = [
    {
      icon: Upload,
      title: t("Envoyez-nous tout ce que vous avez", "Send us everything you've got"),
      description: t(
        "PDFs, vidéos de formation, photos, notes manuscrites — même le désordre. On s'occupe du tri.",
        "PDFs, training videos, photos, handwritten notes — even the mess. We handle the sorting."
      ),
    },
    {
      icon: Layers,
      title: t("On crée vos procédures pour vous", "We create your procedures for you"),
      description: t(
        "On transforme votre matériel brut en instructions claires, étape par étape, avec images et vidéos intégrées. Vous ne rédigez rien.",
        "We turn your raw material into clear step-by-step instructions with embedded images and videos. You write nothing."
      ),
    },
    {
      icon: MessageSquareText,
      title: t("Vos employés posent des questions, le système répond", "Your employees ask questions, the system answers"),
      description: t(
        "Un employé tape sa question en langage normal. Le système répond avec la procédure exacte, la bonne étape, le bon visuel.",
        "An employee types their question in plain language. The system responds with the exact procedure, the right step, the right visual."
      ),
    },
    {
      icon: Rocket,
      title: t("Le système s'améliore tout seul", "The system improves on its own"),
      description: t(
        "Chaque question sans réponse est signalée. Vos experts comblent les trous, et le système devient plus complet avec le temps.",
        "Every unanswered question gets flagged. Your experts fill the gaps, and the system becomes more complete over time."
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
            {t("Vous ne créez pas de procédures.", "You don't create procedures.")}
            <br />
            <span className="text-gradient">{t("On fait tout pour vous.", "We do everything for you.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Pas de rédaction. Pas de logiciel à apprendre. Pas de projet IT. Vous nous envoyez votre matériel, on vous livre un système fonctionnel.",
              "No writing. No software to learn. No IT project. You send us your material, we deliver a working system."
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
          {t("100% clé en main. Zéro effort de votre côté.", "100% done for you. Zero effort on your side.")}
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
                alt: t("Assistant IA répondant à une question sur une procédure", "AI assistant answering a question about a procedure"),
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
