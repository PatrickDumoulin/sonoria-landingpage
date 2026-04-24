import { motion } from "framer-motion";
import { Clock, AlertTriangle, FolderSearch, RotateCcw, Users, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaProblem = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: Clock,
      text: t(
        "Votre responsable qualité passe des semaines chaque année à comparer manuellement vos procédures avec votre norme. Fichier par fichier, clause par clause.",
        "Your quality manager spends weeks every year manually comparing your procedures against your standard. File by file, clause by clause."
      ),
    },
    {
      icon: AlertTriangle,
      text: t(
        "Un auditeur découvre une non-conformité que personne n'avait vue. Ça coûte du temps, de l'argent, et parfois votre certification.",
        "An auditor finds a non-conformity nobody caught. It costs time, money, and sometimes your certification."
      ),
    },
    {
      icon: FolderSearch,
      text: t(
        "Vos procédures internes ont changé en cours d'année. Personne n'a vérifié si elles sont encore conformes à la norme.",
        "Your internal procedures changed during the year. Nobody checked if they still meet the standard."
      ),
    },
    {
      icon: RotateCcw,
      text: t(
        "La révision annuelle est étalée sur toute l'année parce que personne n'a le temps de s'y consacrer d'un coup.",
        "The annual review gets stretched over the whole year because nobody has time to tackle it all at once."
      ),
    },
    {
      icon: Users,
      text: t(
        "Votre équipe passe des heures sur une tâche répétitive, sans valeur ajoutée, que tout le monde déteste faire.",
        "Your team spends hours on a repetitive, low-value task that everyone dreads."
      ),
    },
    {
      icon: RefreshCw,
      text: t(
        "Quand la norme se met à jour, vous ne savez pas exactement ce qui a changé dans vos procédures.",
        "When the standard updates, you don't know exactly what changed in your procedures."
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
            {t("Votre équipe passe des semaines à faire quelque chose ", "Your team spends weeks doing something ")}
            <span className="text-gradient">{t("qu'une machine peut faire en minutes.", "a machine can do in minutes.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Et chaque année, ça recommence.",
              "And every year, it starts again."
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
            "Ce n'est pas un problème de rigueur ou de compétence. C'est un problème de processus manuel qui n'a jamais été automatisé.",
            "This isn't a rigour or competence problem. It's a manual process that has never been automated."
          )}
        </motion.p>
      </div>
    </section>
  );
};
