import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaCTA = () => {
  const { t, language } = useLanguage();

  return (
    <section 
      id="contact" 
      aria-labelledby="cta-heading"
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" aria-hidden="true" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-12 rounded-3xl gradient-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[60px]" aria-hidden="true" />
            
            <div className="relative z-10 text-center">
              <h2 id="cta-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                {t(
                  "10 minutes pour voir où votre équipe perd du temps.",
                  "10 minutes to see where your team is losing time."
                )}
              </h2>
              <p className="text-primary-foreground/80 mb-4 text-lg">
                {t(
                  "Un appel rapide, sans engagement. On regarde ensemble vos processus et on vous dit exactement ce qu'on peut améliorer.",
                  "A quick call, no commitment. We look at your processes together and tell you exactly what we can improve."
                )}
              </p>
              <p className="text-primary-foreground/60 mb-8 text-sm">
                {t(
                  "Pas de présentation PowerPoint. Pas de pitch de vente. Juste une conversation entre opérationnels.",
                  "No PowerPoint presentation. No sales pitch. Just a conversation between operations people."
                )}
              </p>
              <a
                href="https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-background text-foreground font-display font-semibold hover:bg-background/90 transition-colors text-lg"
                aria-label={t("Réserver mon appel de 10 minutes", "Book my 10-minute call")}
              >
                {t("Réserver mon appel de 10 min", "Book my 10-min call")}
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a 
            href="mailto:patrick@sonoria.ca" 
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-medium">patrick@sonoria.ca</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
