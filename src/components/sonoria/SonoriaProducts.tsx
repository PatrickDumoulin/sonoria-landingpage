import { motion } from "framer-motion";
import { ExternalLink, Search, BookOpen, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaProducts = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Search,
      text: t(
        "Réponses tirées directement de vos manuels techniques",
        "Answers drawn directly from your technical manuals"
      ),
    },
    {
      icon: BookOpen,
      text: t(
        "Source exacte citée à chaque réponse (manuel, section, page)",
        "Exact source cited with every answer (manual, section, page)"
      ),
    },
    {
      icon: Shield,
      text: t(
        "Vos données restent dans votre environnement sécurisé",
        "Your data stays in your secure environment"
      ),
    },
    {
      icon: Zap,
      text: t("Opérationnel en 7 à 14 jours", "Operational in 7 to 14 days"),
    },
  ];

  return (
    <section
      id="produits"
      aria-labelledby="produits-heading"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            {t("Nos produits", "Our products")}
          </span>
          <h2
            id="produits-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            {t("Des outils IA ", "AI tools ")}
            <span className="text-gradient">
              {t("pensés pour l'industrie", "built for industry")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "En plus de nos mandats sur mesure, nous développons des produits IA prêts à déployer pour les entreprises manufacturières.",
              "Beyond our custom engagements, we develop ready-to-deploy AI products for manufacturing companies."
            )}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            <div
              className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                  {t("Produit phare", "Flagship product")}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">
                  ExpertSync
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t("par Sonoria", "by Sonoria")}
                </p>
              </div>

              <p className="text-lg text-foreground/90 mb-3 leading-relaxed font-semibold">
                {t(
                  "Toute la connaissance de vos manuels techniques, accessible instantanément.",
                  "All the knowledge from your technical manuals, instantly accessible."
                )}
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t(
                  "ExpertSync transforme vos manuels machines, fiches techniques et procédures d'assemblage en un assistant IA qui répond aux questions de vos techniciens avec précision — et cite sa source à chaque fois. Déployé dans votre environnement isolé, sans jamais exposer votre propriété intellectuelle.",
                  "ExpertSync transforms your machine manuals, technical sheets, and assembly procedures into an AI assistant that answers your technicians' questions with precision — and cites its source every time. Deployed in your isolated environment, without ever exposing your intellectual property."
                )}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <a
                href="https://expert-sync.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity"
                aria-label={t(
                  "Découvrir ExpertSync sur expert-sync.com",
                  "Discover ExpertSync at expert-sync.com"
                )}
              >
                {t("Découvrir ExpertSync", "Discover ExpertSync")}
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
