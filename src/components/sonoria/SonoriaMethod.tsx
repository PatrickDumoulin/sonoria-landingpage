import { motion } from "framer-motion";
import { Settings, BarChart2, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaMethod = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Settings,
      tag: t("Manufacturier · Agro-alimentaire · Construction", "Manufacturing · Agri-food · Construction"),
      title: t("Automatisation des processus", "Process automation"),
      description: t(
        "On identifie et élimine les tâches manuelles répétitives qui freinent votre capacité. Entrée de données, suivi de production, rapports, formulaires de conformité — automatisés, sans erreur.",
        "We identify and eliminate the repetitive manual tasks slowing your capacity. Data entry, production tracking, reports, compliance forms — automated, error-free."
      ),
      outcomes: [
        t("20–30 % de capacité récupérée", "20–30% capacity recovered"),
        t("Moins d'erreurs de saisie", "Fewer data entry errors"),
        t("Conformité simplifiée (HACCP, ISO, CCQ)", "Simplified compliance (HACCP, ISO, CCQ)"),
      ],
    },
    {
      icon: BarChart2,
      tag: t("Toutes industries", "All industries"),
      title: t("Intelligence opérationnelle", "Operational intelligence"),
      description: t(
        "Vos données de production, qualité et inventaire, visibles en temps réel dans un tableau de bord sur mesure. Des alertes proactives qui vous préviennent avant que le problème survient.",
        "Your production, quality, and inventory data visible in real time on a custom dashboard. Proactive alerts that warn you before the problem occurs."
      ),
      outcomes: [
        t("Décisions appuyées sur vos vrais chiffres", "Decisions backed by real numbers"),
        t("Alertes qualité en temps réel", "Real-time quality alerts"),
        t("Visibilité complète sur vos opérations", "Full visibility into your operations"),
      ],
    },
    {
      icon: BookOpen,
      tag: t("Manufacturier · Construction", "Manufacturing · Construction"),
      title: t("Savoir-faire numérique", "Digital know-how"),
      description: t(
        "Votre expertise opérationnelle capturée et rendue accessible à toute l'équipe via un assistant IA sur mesure. Les nouveaux employés deviennent autonomes en jours, pas en semaines.",
        "Your operational expertise captured and made accessible to the whole team via a custom AI assistant. New employees become independent in days, not weeks."
      ),
      outcomes: [
        t("Formation divisée par 3", "Training time cut by 3"),
        t("Réponses instantanées aux questions terrain", "Instant answers to floor-level questions"),
        t("Savoir-faire qui reste dans l'entreprise", "Know-how that stays in the company"),
      ],
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
            {t("Ce qu'on fait", "What we do")}
          </span>
          <h2 id="solution-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Trois façons concrètes ", "Three concrete ways ")}
            <span className="text-gradient">{t("d'améliorer vos opérations.", "we improve your operations.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "On ne vend pas un logiciel générique. On intègre les bons outils IA à votre réalité — sur mesure, avec des résultats mesurables.",
              "We don't sell generic software. We integrate the right AI tools into your reality — custom-built, with measurable results."
            )}
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-primary tracking-wider uppercase mb-2 block">{service.tag}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.outcomes.map((outcome, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
