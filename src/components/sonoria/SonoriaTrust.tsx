import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import logoDeepsight from "@/assets/logo-deepsight.png";
import logoBrb from "@/assets/logo-brb.png";
import logoGemini from "@/assets/logo-gemini.png";

export const SonoriaTrust = () => {
  const { t } = useLanguage();

  const logos = [
    { src: logoDeepsight, alt: "DeepSight" },
    { src: logoBrb, alt: "BRB" },
    { src: logoGemini, alt: "Gemini" },
  ];

  return (
    <section className="py-16 border-y border-border/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto"
        >
          {t(
            "On a automatisé la détection des non-conformités pour des entreprises certifiées au Québec. Ce qui prenait des semaines de vérification manuelle se règle maintenant en quelques heures.",
            "We've automated compliance gap detection for certified companies in Quebec. What used to take weeks of manual review now takes a few hours."
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
            {t("Ils nous font confiance", "Trusted by")}
          </p>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            {logos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center w-24 md:w-32">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 md:max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
