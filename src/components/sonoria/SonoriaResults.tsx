import { motion } from "framer-motion";
import { Clock, RotateCcw, Users, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaResults = () => {
  const { t } = useLanguage();

  const costs = [
    {
      icon: Clock,
      stat: t("5 à 10h", "5 to 10h"),
      title: t("perdues par employé, par semaine", "lost per employee, per week"),
      description: t(
        "À chercher de l'information, poser des questions, attendre la réponse de quelqu'un. Multipliez par votre nombre d'employés.",
        "Searching for information, asking questions, waiting for someone's answer. Multiply by your headcount."
      ),
    },
    {
      icon: RotateCcw,
      stat: t("15-30%", "15-30%"),
      title: t("du temps de production perdu en reprise", "of production time lost to rework"),
      description: t(
        "Des erreurs de montage, des pièces mal assemblées, des étapes sautées. La plupart évitables avec la bonne information au bon moment.",
        "Assembly errors, misaligned parts, skipped steps. Most avoidable with the right information at the right time."
      ),
    },
    {
      icon: Users,
      stat: t("3-6 sem.", "3-6 wks"),
      title: t("pour former un nouvel employé", "to train a new hire"),
      description: t(
        "Pendant ce temps, un employé senior est mobilisé à plein temps pour la formation — et sa propre production s'arrête.",
        "During that time, a senior employee is pulled full-time for training — and their own production stops."
      ),
    },
    {
      icon: DollarSign,
      stat: t("50 000 $+", "$50,000+"),
      title: t("en coûts cachés par année", "in hidden costs per year"),
      description: t(
        "Temps perdu, erreurs, formation prolongée, surcharge de vos meilleurs employés. Des coûts que personne ne mesure — mais tout le monde ressent.",
        "Lost time, errors, extended training, overloaded top employees. Costs nobody measures — but everyone feels."
      ),
    },
  ];

  return (
    <section 
      id="impact" 
      aria-labelledby="impact-heading"
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
            {t("Le coût réel", "The real cost")}
          </span>
          <h2 id="impact-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Combien ça vous coûte ", "How much is this ")}
            <span className="text-gradient">{t("de ne rien changer ?", "costing you?")}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {costs.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <cost.icon className="w-6 h-6 text-destructive" aria-hidden="true" />
                </div>
                <span className="font-display text-2xl font-bold text-destructive">{cost.stat}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{cost.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cost.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          {t(
            "Vous compensez avec plus d'heures supplémentaires et plus de supervision. Mais le vrai problème reste le même.",
            "You compensate with more overtime and more supervision. But the real problem stays the same."
          )}
        </motion.p>
      </div>
    </section>
  );
};
