import { motion } from "framer-motion";
import { MessageSquare, Brain, GraduationCap, AlertTriangle, FolderSearch, UserMinus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaProblem = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: MessageSquare,
      text: t(
        "Un opérateur arrête sa ligne pour aller poser une question à un collègue. Ça arrive 10 fois par jour.",
        "An operator stops the line to go ask a colleague a question. It happens 10 times a day."
      ),
    },
    {
      icon: Brain,
      text: t(
        "Votre meilleur technicien part à la retraite dans 6 mois. Tout ce qu'il sait est dans sa tête.",
        "Your best technician retires in 6 months. Everything he knows is in his head."
      ),
    },
    {
      icon: GraduationCap,
      text: t(
        "Un nouvel employé met 3 à 6 semaines avant de pouvoir travailler seul — et quelqu'un doit le former à temps plein.",
        "A new hire takes 3 to 6 weeks before they can work alone — and someone has to train them full-time."
      ),
    },
    {
      icon: FolderSearch,
      text: t(
        "Les procédures existent... quelque part. Dans un cartable, un drive, ou la mémoire de quelqu'un.",
        "Procedures exist... somewhere. In a binder, a shared drive, or someone's memory."
      ),
    },
    {
      icon: AlertTriangle,
      text: t(
        "Des erreurs de montage ou d'assemblage qui auraient été évitées si l'information avait été claire et accessible.",
        "Assembly or setup errors that would have been avoided if the information had been clear and accessible."
      ),
    },
    {
      icon: UserMinus,
      text: t(
        "Quand un employé clé est absent ou quitte, toute l'équipe est ralentie pendant des semaines.",
        "When a key employee is absent or leaves, the whole team slows down for weeks."
      ),
    },
  ];

  return (
    <section 
      id="probleme"
      aria-labelledby="problem-heading"
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
            {t("Le vrai problème", "The real problem")}
          </span>
          <h2 id="problem-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Votre savoir-faire est ", "Your know-how is ")}
            <span className="text-gradient">{t("coincé dans la tête de vos employés.", "stuck in your employees' heads.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Et chaque jour, ça vous coûte du temps, de l'argent, et de la capacité de production.",
              "And every day, it's costing you time, money, and production capacity."
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <problem.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <p className="font-display text-sm font-semibold text-foreground leading-relaxed">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xl text-foreground font-display font-bold max-w-3xl mx-auto"
        >
          {t(
            "Ce n'est pas un problème de machines ou de logiciels. C'est un problème de connaissances mal transmises.",
            "This isn't a machine or software problem. It's a knowledge transfer problem."
          )}
        </motion.p>
      </div>
    </section>
  );
};
