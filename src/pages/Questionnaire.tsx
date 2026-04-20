import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Calendar } from "lucide-react";
import { SonoriaNavbar } from "@/components/sonoria/SonoriaNavbar";
import { SonoriaFooter } from "@/components/sonoria/SonoriaFooter";

type Answer = "yes" | "no" | "unsure" | null;

interface Question {
  id: number;
  sectionFr: string;
  sectionEn: string;
  questionFr: string;
  questionEn: string;
}

const questions: Question[] = [
  {
    id: 1,
    sectionFr: "Reporting & Données",
    sectionEn: "Reporting & Data",
    questionFr: "Vos équipes consolident-elles manuellement des données provenant de plusieurs outils (Excel, emails, exports ERP) pour produire des rapports?",
    questionEn: "Do your teams manually consolidate data from multiple tools (Excel, emails, ERP exports) to produce reports?"
  },
  {
    id: 2,
    sectionFr: "Saisie de Données & Duplication",
    sectionEn: "Data Entry & Duplication",
    questionFr: "Les mêmes informations sont-elles saisies manuellement dans plus d'un système?",
    questionEn: "Is the same information entered manually in more than one system?"
  },
  {
    id: 3,
    sectionFr: "Transferts de Processus",
    sectionEn: "Workflow Handoffs",
    questionFr: "Les processus dépendent-ils d'emails ou de suivis manuels entre les équipes pour avancer?",
    questionEn: "Do processes rely on emails or manual follow-ups between teams to move forward?"
  },
  {
    id: 4,
    sectionFr: "Gestion des Erreurs",
    sectionEn: "Error Handling",
    questionFr: "Les erreurs opérationnelles sont-elles fréquemment causées par des copier-coller ou des étapes de validation manuelles?",
    questionEn: "Are operational errors frequently caused by copy-paste or manual validation steps?"
  },
  {
    id: 5,
    sectionFr: "Sensibilité au Temps",
    sectionEn: "Time Sensitivity",
    questionFr: "Les retards dans les processus internes ont-ils un impact direct sur les revenus, les livraisons ou la satisfaction client?",
    questionEn: "Do delays in internal processes directly impact revenue, delivery, or customer satisfaction?"
  }
];

const Questionnaire = () => {
  const { language, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([null, null, null, null, null]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: Answer) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = value;
    setAnswers(newAnswers);
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResults(true);
      }
    }, 300);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (showResults) {
      setShowResults(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const yesCount = answers.filter(a => a === "yes").length;
  const isHighImpact = yesCount >= 5;
  const isStrongOpportunity = yesCount >= 3;

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SonoriaNavbar />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <article className="w-full max-w-2xl">
          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t(
                "Scan d'Opportunités d'Automatisation",
                "Operational Automation Opportunity Scan"
              )}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t(
                "Auto-évaluation en 5 questions",
                "Self-assessment in 5 questions"
              )}
            </p>
          </motion.header>

          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={`question-${currentStep}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-xl"
              >
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>{t("Question", "Question")} {currentStep + 1}/{questions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Section title */}
                <div className="mb-6">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                    {t("Section", "Section")} {currentQuestion.id} — {language === "fr" ? currentQuestion.sectionFr : currentQuestion.sectionEn}
                  </span>
                </div>

                {/* Question */}
                <h2 className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                  {language === "fr" ? currentQuestion.questionFr : currentQuestion.questionEn}
                </h2>

                {/* Options */}
                <RadioGroup
                  value={answers[currentStep] || ""}
                  onValueChange={(value) => handleAnswer(value as Answer)}
                  className="space-y-4"
                >
                  {[
                    { value: "yes", labelFr: "Oui", labelEn: "Yes" },
                    { value: "no", labelFr: "Non", labelEn: "No" },
                    { value: "unsure", labelFr: "Incertain", labelEn: "Unsure" }
                  ].map((option) => (
                    <motion.div
                      key={option.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Label
                        htmlFor={option.value}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          answers[currentStep] === option.value
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <span className="text-lg font-medium">
                          {language === "fr" ? option.labelFr : option.labelEn}
                        </span>
                      </Label>
                    </motion.div>
                  ))}
                </RadioGroup>

                {/* Navigation */}
                <div className="flex justify-between mt-10">
                  <Button
                    variant="ghost"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {t("Précédent", "Previous")}
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={!answers[currentStep]}
                    className="gap-2 bg-primary hover:bg-primary/90"
                  >
                    {currentStep === questions.length - 1 
                      ? t("Voir les résultats", "See Results")
                      : t("Suivant", "Next")
                    }
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-xl text-center"
              >
                {/* Result icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    isStrongOpportunity ? "bg-primary/20" : "bg-muted"
                  }`}
                >
                  <CheckCircle2 className={`w-10 h-10 ${isStrongOpportunity ? "text-primary" : "text-muted-foreground"}`} />
                </motion.div>

                {/* Score */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {yesCount}/5 {t("réponses \"Oui\"", "\"Yes\" answers")}
                </h2>

                {/* Result message */}
                <div className="mb-8">
                  {isHighImpact ? (
                    <p className="text-lg text-primary font-semibold">
                      {t(
                        "Opportunité à fort impact détectée",
                        "High-impact opportunity detected"
                      )}
                    </p>
                  ) : isStrongOpportunity ? (
                    <p className="text-lg text-primary font-semibold">
                      {t(
                        "Forte opportunité d'automatisation détectée",
                        "Strong automation opportunity detected"
                      )}
                    </p>
                  ) : (
                    <p className="text-lg text-muted-foreground">
                      {t(
                        "Vos processus semblent relativement optimisés",
                        "Your processes seem relatively optimized"
                      )}
                    </p>
                  )}
                </div>

                {/* CTA for 3+ yes */}
                {isStrongOpportunity && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-8"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {t(
                        "Réservez une revue opérationnelle de 20 minutes",
                        "Book a 20-minute operational review"
                      )}
                    </h3>
                    <ul className="text-muted-foreground space-y-2 mb-6 text-left max-w-xs mx-auto">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {t("Aucun argumentaire de vente", "No sales pitch")}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {t("Aucune obligation", "No obligation")}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {t(
                          "Nous évaluons la faisabilité, l'impact et les contraintes",
                          "We assess feasibility, impact, and constraints"
                        )}
                      </li>
                    </ul>
                    <Button 
                      size="lg" 
                      className="gap-2 bg-primary hover:bg-primary/90"
                      onClick={() => window.open("https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte", "_blank")}
                    >
                      <Calendar className="w-5 h-5" />
                      {t("Réserver maintenant", "Book Now")}
                    </Button>
                  </motion.div>
                )}

                {/* Back button */}
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t("Revoir les questions", "Review Questions")}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </article>
      </main>

      <SonoriaFooter />
    </div>
  );
};

export default Questionnaire;
