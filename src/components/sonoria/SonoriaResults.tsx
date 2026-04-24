import { motion } from "framer-motion";
import { Clock, DollarSign, ShieldAlert, RotateCcw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaResults = () => {
  const { t } = useLanguage();

  const costs = [
    {
      icon: Clock,
      stat: t("40h", "40h"),
      title: t("par mois passées à vérifier la conformité manuellement", "per month spent on manual compliance review"),
      description: t(
        "Votre responsable qualité compare fichier par fichier, clause par clause, les procédures internes avec les exigences de votre norme. Chaque mois.",
        "Your quality manager compares file by file, clause by clause, your internal procedures against your standard's requirements. Every month."
      ),
    },
    {
      icon: DollarSign,
      stat: t("Des dizaines de milliers $", "Tens of thousands $"),
      title: t("ce que peut coûter un audit raté", "what a failed audit can cost"),
      description: t(
        "Non-conformités majeures, plans d'action, réaudits, suspension de certification. Un auditeur qui trouve avant vous, ça coûte cher.",
        "Major non-conformities, action plans, re-audits, suspended certification. An auditor finding issues before you do is expensive."
      ),
    },
    {
      icon: ShieldAlert,
      stat: t("100%", "100%"),
      title: t("des non-conformités auraient pu être détectées automatiquement", "of non-conformities could have been detected automatically"),
      description: t(
        "Chaque écart que vous trouvez manuellement aurait pu être signalé automatiquement. Le problème n'est pas le soin apporté, c'est le processus.",
        "Every gap you find manually could have been flagged automatically. The issue isn't diligence, it's the process."
      ),
    },
    {
      icon: RotateCcw,
      stat: t("Des semaines", "Weeks"),
      title: t("de vérification répétitive chaque année", "of repetitive checking every year"),
      description: t(
        "Une tâche que tout le monde reconnaît comme répétitive et évitable, mais que personne n'a encore automatisée. Ça recommence chaque année.",
        "A task everyone knows is repetitive and avoidable, but that nobody has automated yet. It happens again every year."
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
            "Vous compensez avec plus d'heures et plus de stress avant chaque audit. Mais le vrai problème reste le même.",
            "You compensate with more hours and more stress before every audit. But the real problem stays the same."
          )}
        </motion.p>
      </div>
    </section>
  );
};
