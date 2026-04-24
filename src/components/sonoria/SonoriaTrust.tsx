import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import logoDeepsight from "@/assets/logo-deepsight.png";
import logoBrb from "@/assets/logo-brb.png";
import logoGemini from "@/assets/logo-gemini.png";
import logoFermeOlofee from "@/assets/logo olofee.png";

export const SonoriaTrust = () => {
  const { t } = useLanguage();

  const logos = [
    { src: logoDeepsight, alt: "DeepSight" },
    { src: logoBrb, alt: "BRB" },
    { src: logoGemini, alt: "Sonoria" },
    { src: logoFermeOlofee, alt: "Ferme Olofée" },
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
            "Je conçois des systèmes qui ont généré plus de 700 000 $ en valeur opérationnelle et automatisent des processus critiques. Soutenu par une équipe avec plus de 10 ans d'expérience à livrer des systèmes logiciels concrets.",
            "I design systems that have generated over $700,000 in operational value and automate critical processes. Backed by a team with 10+ years of experience delivering real-world software systems."
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
                  className="max-h-10 md:max-h-12 w-auto object-contain opacity-100"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
