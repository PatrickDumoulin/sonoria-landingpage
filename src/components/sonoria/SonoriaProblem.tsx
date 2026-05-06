import { motion } from "framer-motion";
import { TrendingDown, Database, AlertTriangle, Puzzle, ClipboardList, UserMinus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaProblem = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: TrendingDown,
      text: t(
        "Vos concurrents automatisent des tâches que vos employés font encore à la main — et gagnent 20 à 30 % en capacité.",
        "Your competitors automate tasks your employees still do by hand — gaining 20–30% more capacity."
      ),
    },
    {
      icon: Database,
      text: t(
        "Vos données de production dorment dans des Excel. Personne n'a le temps de les analyser, et les décisions se prennent à l'instinct.",
        "Your production data sits unused in spreadsheets. Nobody has time to analyze it, so decisions are made on gut feel."
      ),
    },
    {
      icon: AlertTriangle,
      text: t(
        "Un problème de qualité se détecte trop tard — après que la commande est sortie. Le rappel, la reprise ou la perte client coûte cher.",
        "A quality issue is detected too late — after the order ships. The recall, rework, or lost client costs a fortune."
      ),
    },
    {
      icon: Puzzle,
      text: t(
        "Vous avez déjà essayé des outils technologiques qui ne collaient pas à votre réalité terrain. Résultat : abandonné au bout de 3 mois.",
        "You've tried tech tools that didn't fit your shop floor reality. Result: abandoned within 3 months."
      ),
    },
    {
      icon: ClipboardList,
      text: t(
        "La conformité et la traçabilité — HACCP, ISO, CCQ — vous coûtent des heures de saisie manuelle chaque semaine.",
        "Compliance and traceability — HACCP, ISO, CCQ — eat hours of manual data entry every week."
      ),
    },
    {
      icon: UserMinus,
      text: t(
        "Votre savoir-faire est concentré dans quelques personnes. Quand elles partent ou sont absentes, toute l'équipe est ralentie.",
        "Your know-how is concentrated in a few people. When they leave or are absent, the whole team slows down."
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
            {t("Le virage IA est en cours. ", "The AI shift is already happening. ")}
            <span className="text-gradient">{t("Mais pas dans votre usine.", "Just not in your plant.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Les PME industrielles qui adoptent l'IA maintenant prennent une avance structurelle sur celles qui attendent.",
              "Industrial SMEs that adopt AI now are building a structural lead over those that wait."
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
            "Ce n'est pas un problème de budget ou de taille d'entreprise. C'est un problème d'accompagnement.",
            "This isn't a budget or company size problem. It's a guidance problem."
          )}
        </motion.p>
      </div>
    </section>
  );
};
