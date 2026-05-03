import { motion } from "framer-motion";
import {
  AlertTriangle, FileSearch, RotateCcw, ShieldOff, BookOpen, FolderOpen,
  ArrowRight, CheckCircle, Shield, ClipboardCheck, Upload, Layers,
  MessageSquareText, Award, Mail, BarChart3, Clock, TrendingDown
} from "lucide-react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { SonoriaNavbar } from "@/components/sonoria/SonoriaNavbar";
import { SonoriaFooter } from "@/components/sonoria/SonoriaFooter";
import { SonoriaTrust } from "@/components/sonoria/SonoriaTrust";

const calendlyUrl = "https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte";

// ─── Hero ────────────────────────────────────────────────────────────────────

const ConformityHero = () => {
  const { t } = useLanguage();

  const badges = [
    { icon: TrendingDown, text: t("Moins de non-conformités récurrentes", "Fewer recurring non-conformities") },
    { icon: Shield, text: t("Documentation tracée et vérifiable", "Traceable, auditable documentation") },
    { icon: Award, text: t("Certifications protégées", "Certifications protected") },
  ];

  return (
    <section
      id="hero"
      aria-labelledby="conformity-hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24"
    >
      <div className="absolute inset-0 gradient-hero" aria-hidden="true" />
      <div className="absolute inset-0 gradient-glow opacity-60" aria-hidden="true" />

      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            id="conformity-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            {t(
              "Vos non-conformités reviennent.",
              "Your non-conformities keep coming back."
            )}
            <br />
            <span className="text-gradient">{t("Encore.", "Every audit.")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            {t(
              "Pas parce que vos procédures sont mauvaises. Parce que vos employés ne les suivent pas — souvent parce qu'ils ne les trouvent pas au bon moment.",
              "Not because your procedures are bad. Because your employees don't follow them — often because they can't find them when it matters."
            )}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-foreground/80 max-w-3xl mx-auto mb-10 font-display font-semibold"
          >
            {t(
              "On transforme votre documentation de conformité en un système vivant que vos équipes consultent vraiment — et que vos auditeurs peuvent vérifier.",
              "We transform your compliance documentation into a living system your teams actually consult — and your auditors can verify."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">
                <badge.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                {badge.text}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity text-lg"
              aria-label={t("Analyser mes lacunes de conformité gratuitement", "Analyze my compliance gaps for free")}
            >
              {t("Analyser mes lacunes — c'est gratuit", "Analyze my gaps — it's free")}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <p className="text-sm text-muted-foreground mt-3">
              {t("Appel de 10 min. On identifie ensemble vos risques d'audit.", "10-min call. We identify your audit risks together.")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Problems ────────────────────────────────────────────────────────────────

const ConformityProblems = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: RotateCcw,
      text: t(
        "Les mêmes non-conformités réapparaissent à chaque cycle d'audit, même après des actions correctives.",
        "The same non-conformities reappear every audit cycle, even after corrective actions."
      ),
    },
    {
      icon: FileSearch,
      text: t(
        "Les auditeurs trouvent un écart entre les procédures écrites et ce que vos employés font réellement.",
        "Auditors find a gap between written procedures and what your employees actually do."
      ),
    },
    {
      icon: ShieldOff,
      text: t(
        "Votre certification ISO / SQF / CNESST est fragile si un employé clé part ou est absent.",
        "Your ISO / SQF / CNESST certification is fragile when a key employee leaves or is absent."
      ),
    },
    {
      icon: BookOpen,
      text: t(
        "Vos employés ne consultent pas les procédures parce qu'elles sont difficiles à trouver ou à comprendre.",
        "Employees don't consult procedures because they're hard to find or understand."
      ),
    },
    {
      icon: FolderOpen,
      text: t(
        "Vos documents de conformité sont éparpillés dans des drives, des cartables et des boîtes courriel.",
        "Your compliance documents are scattered across drives, binders, and email inboxes."
      ),
    },
    {
      icon: AlertTriangle,
      text: t(
        "La préparation aux audits mobilise votre équipe pendant des semaines et génère un stress inutile.",
        "Audit preparation ties up your team for weeks and generates unnecessary stress."
      ),
    },
  ];

  return (
    <section
      id="probleme"
      aria-labelledby="conformity-problem-heading"
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
            {t("Ce que vos auditeurs voient", "What your auditors see")}
          </span>
          <h2 id="conformity-problem-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Vos procédures sont à jour.", "Your procedures are up to date.")}
            <br />
            <span className="text-gradient">{t("Vos pratiques ne le sont pas.", "Your practices aren't.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "L'écart entre la documentation et la réalité du plancher, c'est exactement ce que cherchent les auditeurs. Et ils le trouvent.",
              "The gap between documentation and floor reality is exactly what auditors look for. And they find it."
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
            "Ce n'est pas un problème de documentation. C'est un problème d'accessibilité du savoir au bon moment.",
            "This isn't a documentation problem. It's a knowledge accessibility problem at the right moment."
          )}
        </motion.p>
      </div>
    </section>
  );
};

// ─── Impact ──────────────────────────────────────────────────────────────────

const ConformityImpact = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: Clock,
      value: t("2–4 semaines", "2–4 weeks"),
      label: t("mobilisées chaque année pour préparer un audit", "tied up every year preparing for an audit"),
    },
    {
      icon: BarChart3,
      value: t("60–80 %", "60–80%"),
      label: t("des non-conformités sont dues à des procédures mal comprises ou introuvables", "of non-conformities stem from procedures that are misunderstood or hard to find"),
    },
    {
      icon: AlertTriangle,
      value: t("1 départ", "1 departure"),
      label: t("d'un employé clé peut suffire à faire échouer un audit si le savoir n'est pas documenté", "of a key employee can cause an audit failure if knowledge isn't documented"),
    },
  ];

  return (
    <section
      id="impact"
      aria-labelledby="conformity-impact-heading"
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
            {t("Le vrai coût", "The real cost")}
          </span>
          <h2 id="conformity-impact-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t(
              "Chaque non-conformité récurrente, c'est ",
              "Every recurring non-conformity is "
            )}
            <span className="text-gradient">{t("un signal d'alarme ignoré.", "a warning signal ignored.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Les audits ne sont que le symptôme visible. Le problème de fond, c'est que votre savoir opérationnel n'est pas accessible quand vos équipes en ont besoin.",
              "Audits are just the visible symptom. The underlying problem is that your operational knowledge isn't accessible when your teams need it."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
              </div>
              <div className="font-display text-4xl font-bold text-primary mb-3">{metric.value}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Solution ────────────────────────────────────────────────────────────────

const ConformitySolution = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Upload,
      title: t("On part de ce que vous avez", "We start from what you have"),
      description: t(
        "Procédures existantes, manuels de qualité, formulaires d'audit, vidéos de formation — on analyse tout et identifie les lacunes de conformité.",
        "Existing procedures, quality manuals, audit forms, training videos — we analyze everything and identify compliance gaps."
      ),
    },
    {
      icon: Layers,
      title: t("On structure votre documentation", "We structure your documentation"),
      description: t(
        "On organise votre savoir opérationnel en procédures claires, conformes à vos exigences ISO / SQF / CNESST, avec les preuves intégrées.",
        "We organize your operational knowledge into clear procedures, aligned with your ISO / SQF / CNESST requirements, with built-in evidence."
      ),
    },
    {
      icon: MessageSquareText,
      title: t("Vos employés trouvent la bonne réponse en secondes", "Employees find the right answer in seconds"),
      description: t(
        "Un technicien tape sa question. Le système lui répond avec la procédure exacte, la bonne étape, le bon visuel — directement sur le plancher.",
        "A technician types their question. The system responds with the exact procedure, the right step, the right visual — directly on the floor."
      ),
    },
    {
      icon: ClipboardCheck,
      title: t("Chaque consultation est tracée pour vos auditeurs", "Every consultation is tracked for your auditors"),
      description: t(
        "Vous pouvez prouver que vos employés ont consulté les bonnes procédures. Un rapport clair, prêt le jour de l'audit.",
        "You can prove your employees consulted the right procedures. A clear report, ready on audit day."
      ),
    },
  ];

  return (
    <section
      id="solution"
      aria-labelledby="conformity-solution-heading"
      className="py-24 bg-muted/30 relative overflow-hidden"
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
            {t("Notre approche conformité", "Our compliance approach")}
          </span>
          <h2 id="conformity-solution-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("De l'écart à la conformité.", "From gap to compliance.")}
            <br />
            <span className="text-gradient">{t("Sans projet IT. Sans effort de rédaction.", "No IT project. No writing effort.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "On fait tout le travail de structuration pour vous. Vous recevez un système opérationnel en 14 jours, conforme à vos exigences de certification.",
              "We do all the structuring work for you. You receive an operational system in 14 days, aligned with your certification requirements."
            )}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-primary font-display font-bold text-lg mb-12"
        >
          {t("100% clé en main. Zéro rédaction de votre côté.", "100% done for you. Zero writing on your end.")}
        </motion.p>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Results ─────────────────────────────────────────────────────────────────

const ConformityResults = () => {
  const { t } = useLanguage();

  const results = [
    t("Non-conformités récurrentes éliminées à la source", "Recurring non-conformities eliminated at the source"),
    t("Employés qui suivent les procédures parce qu'elles sont accessibles en temps réel", "Employees follow procedures because they're accessible in real time"),
    t("Préparation aux audits réduite de semaines à quelques heures", "Audit preparation reduced from weeks to a few hours"),
    t("Preuve de conformité disponible à tout moment pour les auditeurs", "Compliance proof available at any time for auditors"),
    t("Certifications protégées même quand un employé clé part", "Certifications protected even when a key employee leaves"),
    t("Documentation toujours à jour, sans effort de maintenance", "Documentation always up to date, with no maintenance effort"),
  ];

  return (
    <section
      id="resultats"
      aria-labelledby="conformity-results-heading"
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
            {t("Ce que vous obtenez", "What you get")}
          </span>
          <h2 id="conformity-results-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("Passez vos audits.", "Pass your audits.")}
            <br />
            <span className="text-gradient">{t("Protégez vos certifications.", "Protect your certifications.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Quand vos procédures sont accessibles et comprises, la conformité devient une conséquence naturelle — pas un sprint de dernière minute.",
              "When your procedures are accessible and understood, compliance becomes a natural outcome — not a last-minute sprint."
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm text-foreground font-medium leading-relaxed">{result}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CTA ─────────────────────────────────────────────────────────────────────

const ConformityCTA = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      aria-labelledby="conformity-cta-heading"
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
              <h2 id="conformity-cta-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                {t(
                  "Identifiez vos risques d'audit en 10 minutes.",
                  "Identify your audit risks in 10 minutes."
                )}
              </h2>
              <p className="text-primary-foreground/80 mb-4 text-lg">
                {t(
                  "On analyse ensemble vos processus et on identifie exactement où se cachent vos lacunes de conformité.",
                  "We analyze your processes together and identify exactly where your compliance gaps are hiding."
                )}
              </p>
              <p className="text-primary-foreground/60 mb-8 text-sm">
                {t(
                  "Pas de PowerPoint. Pas de pitch. Juste une analyse concrète de votre situation.",
                  "No PowerPoint. No pitch. Just a concrete analysis of your situation."
                )}
              </p>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-background text-foreground font-display font-semibold hover:bg-background/90 transition-colors text-lg"
                aria-label={t("Analyser mes lacunes de conformité gratuitement", "Analyze my compliance gaps for free")}
              >
                {t("Analyser mes lacunes — c'est gratuit", "Analyze my gaps — it's free")}
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

// ─── Page ─────────────────────────────────────────────────────────────────────

const Conformity = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <SonoriaNavbar />
        <main>
          <ConformityHero />
          <SonoriaTrust />
          <ConformityProblems />
          <ConformityImpact />
          <ConformitySolution />
          <ConformityResults />
          <ConformityCTA />
        </main>
        <SonoriaFooter />
      </div>
    </LanguageProvider>
  );
};

export default Conformity;
