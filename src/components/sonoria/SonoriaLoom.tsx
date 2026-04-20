import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const SonoriaLoom = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4"
        >
          {t("Voir en action", "See it in action")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-foreground mb-10"
        >
          {t("Une démonstration concrète", "A concrete demonstration")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-elegant"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            src="https://www.loom.com/embed/395beb5546d940ad9b7078b46f5a0ea3"
            frameBorder="0"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};
