import { motion } from "framer-motion";
import { MessageSquareText, Zap, TrendingUp, Shield, Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaResultsFinal = () => {
  const { t } = useLanguage();

  const results = [
    {
      icon: MessageSquareText,
      text: t("Vos employés trouvent la réponse en 10 secondes — sans déranger personne", "Your employees find the answer in 10 seconds — without bothering anyone"),
    },
    {
      icon: Zap,
      text: t("Les nouveaux employés sont autonomes dès la première semaine, pas après 6", "New employees are independent within the first week, not after 6"),
    },
    {
      icon: TrendingUp,
      text: t("Moins d'erreurs de montage et d'assemblage sur le plancher", "Fewer assembly and setup errors on the floor"),
    },
    {
      icon: Shield,
      text: t("Le savoir-faire reste dans l'entreprise — même quand quelqu'un part", "Know-how stays in the company — even when someone leaves"),
    },
    {
      icon: Clock,
      text: t("Vos meilleurs employés arrêtent de perdre leur temps à répéter les mêmes explications", "Your best employees stop wasting time repeating the same explanations"),
    },
    {
      icon: Users,
      text: t("Votre production est moins dépendante de quelques individus", "Your production is less dependent on a few individuals"),
    },
  ];

  return (
    <section 
      id="resultats" 
      aria-labelledby="results-heading"
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
            {t("Les résultats", "The results")}
          </span>
          <h2 id="results-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Ce que ça change ", "What this changes ")}
            <span className="text-gradient">{t("sur votre plancher.", "on your shop floor.")}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <result.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <p className="font-display text-sm font-semibold text-foreground leading-relaxed">{result.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xl text-foreground font-display font-semibold max-w-3xl mx-auto"
        >
          {t(
            "Une usine où l'information circule sans effort. Où chaque employé peut faire son travail sans attendre après quelqu'un.",
            "A plant where information flows effortlessly. Where every employee can do their job without waiting on someone."
          )}
        </motion.p>
      </div>
    </section>
  );
};
