import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import logoDeepsight from "@/assets/logo-deepsight.png";
import logoBrb from "@/assets/logo-brb.png";
import logoGemini from "@/assets/logo-gemini.png";
import logoFermeOlofee from "@/assets/logo olofee.png";
import logoUdeM from "@/assets/universite-de-montreal-1 (2).jpg";

export const SonoriaTrust = () => {
  const { t } = useLanguage();

  const logos = [
    { src: logoDeepsight, alt: "DeepSight", large: false },
    { src: logoBrb, alt: "BRB", large: false },
    { src: logoGemini, alt: "Sonoria", large: false },
    { src: logoFermeOlofee, alt: "Ferme Olofée", large: false },
    { src: logoUdeM, alt: "Université de Montréal", large: true },
  ];

  const track = [...logos, ...logos];

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
            "Nous concevons des systèmes qui ont généré plus de 700 000 $ en valeur opérationnelle et automatisent des processus critiques. Soutenus par une équipe avec plus de 10 ans d'expérience à livrer des systèmes logiciels concrets.",
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
          <div className="overflow-hidden">
            <div className="flex items-center animate-marquee w-max">
              {track.map((logo, i) => (
                <div key={i} className="flex items-center justify-center px-12 flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={logo.large ? "max-h-14 md:max-h-16 w-auto object-contain" : "max-h-10 md:max-h-12 w-auto object-contain"}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
