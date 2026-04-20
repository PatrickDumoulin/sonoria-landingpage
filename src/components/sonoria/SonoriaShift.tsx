import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaShift = () => {
  const { t } = useLanguage();

  const oldWays = [
    t("Les réponses sont dans la tête de 2 ou 3 personnes", "Answers live in 2 or 3 people's heads"),
    t("On interrompt quelqu'un chaque fois qu'on a une question", "Someone gets interrupted every time there's a question"),
    t("Les procédures sont dans des cartables que personne n'ouvre", "Procedures are in binders nobody opens"),
    t("Former un nouveau prend des semaines et mobilise un senior", "Training a new hire takes weeks and ties up a senior"),
    t("Quand quelqu'un part, son savoir part avec", "When someone leaves, their knowledge leaves too"),
  ];

  const newWays = [
    t("Les réponses sont accessibles à tout le monde, tout le temps", "Answers are accessible to everyone, all the time"),
    t("Les employés trouvent l'information seuls, en quelques secondes", "Employees find information on their own, in seconds"),
    t("Des procédures claires, étape par étape, avec images et vidéos", "Clear step-by-step procedures with images and videos"),
    t("Les nouveaux sont autonomes dès la première semaine", "New hires are independent within the first week"),
    t("Le savoir-faire est capturé et reste dans l'entreprise", "Know-how is captured and stays in the company"),
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
            {t("Imaginez votre usine ", "Imagine your plant ")}
            <span className="text-gradient">{t("sans ces problèmes.", "without these problems.")}</span>
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
