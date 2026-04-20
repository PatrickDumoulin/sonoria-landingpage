# Sonoria — Guide de recréation avec Claude Code

Ce dossier contient TOUT le code source du site Sonoria (landing page B2B pour le secteur Manufacturier & Construction). Suis ces instructions pour le recréer à l'identique avec Claude Code.

---

## 1. Stack technique

- **Framework** : Vite 5 + React 18 + TypeScript 5
- **Styling** : Tailwind CSS v3 + shadcn/ui (Radix UI)
- **Animations** : framer-motion
- **Routing** : react-router-dom v6
- **Icônes** : lucide-react
- **Forms** : react-hook-form + zod
- **Data fetching** : @tanstack/react-query
- **Backend (optionnel)** : Supabase (`@supabase/supabase-js`)

---

## 2. Initialisation du projet

```bash
npm create vite@latest sonoria -- --template react-swc-ts
cd sonoria
```

Remplace ensuite le `package.json` par celui fourni dans ce dossier, puis :

```bash
npm install
```

---

## 3. Configuration shadcn/ui

Le projet utilise shadcn/ui avec ces alias (`components.json` fourni) :
- `@/components` → `src/components`
- `@/lib/utils` → `src/lib/utils`
- `@/components/ui` → `src/components/ui`
- `@/hooks` → `src/hooks`

Tous les composants `ui/` (button, card, dialog, etc.) sont fournis dans `src/components/ui/`. Pas besoin de réinstaller via la CLI shadcn.

---

## 4. Structure des fichiers à reproduire

```
src/
├── App.tsx                      # Routes : / et /questionnaire
├── main.tsx                     # Provider LanguageContext
├── index.css                    # Design system (HSL tokens) ⚠️ CRITIQUE
├── contexts/
│   └── LanguageContext.tsx      # i18n FR/EN custom
├── components/
│   ├── ui/                      # shadcn components
│   ├── NavLink.tsx
│   └── sonoria/
│       ├── SonoriaNavbar.tsx
│       ├── SonoriaHero.tsx
│       ├── SonoriaTrust.tsx
│       ├── SonoriaProblem.tsx
│       ├── SonoriaResults.tsx       # section "Coût"
│       ├── SonoriaShift.tsx         # Avant/Après
│       ├── SonoriaMethod.tsx        # Solution
│       ├── SonoriaProcess.tsx       # 14 jours
│       ├── SonoriaResultsFinal.tsx  # Résultats finaux
│       ├── SonoriaCTA.tsx
│       └── SonoriaFooter.tsx
├── pages/
│   ├── Index.tsx
│   ├── Questionnaire.tsx
│   └── NotFound.tsx
├── hooks/
└── lib/utils.ts
public/
├── favicon (logo Sonoria)
└── robots.txt, sitemap.xml
```

---

## 5. Design system (CRITIQUE)

⚠️ **NE JAMAIS** utiliser de couleurs Tailwind directes (`text-white`, `bg-blue-500`, etc.) dans les composants. **TOUT** passe par les tokens HSL définis dans `src/index.css` et `tailwind.config.ts`.

### Palette
- Couleur primaire : **cyan/bleu** (Sonoria brand)
- ❌ Pas de jaune, orange, ou rouge
- Mode sombre uniquement (la landing est dark par défaut)

### Tokens clés (voir `index.css`)
- `--background`, `--foreground`
- `--primary`, `--primary-foreground`, `--primary-glow`
- `--gradient-primary`, `--gradient-hero`
- `--shadow-elegant`, `--shadow-glow`

### Typographie
- Display font : police distinctive (voir `tailwind.config.ts` → `fontFamily.display`)
- Body : Inter ou équivalent

---

## 6. Internationalisation (FR/EN)

Système custom dans `src/contexts/LanguageContext.tsx`. Usage dans les composants :

```tsx
const { t } = useLanguage();
<h1>{t("Texte français", "English text")}</h1>
```

Le sélecteur de langue est dans `SonoriaNavbar.tsx`.

---

## 7. Structure de la landing page (`pages/Index.tsx`)

Tunnel de conversion en 9 sections, dans l'ordre :

1. **SonoriaHero** — headline sur les procédures inutilisées + CTA "Appel découverte 10 min"
2. **SonoriaTrust** — logos / preuve sociale
3. **SonoriaProblem** — savoir-faire tribal, 4+ pain points
4. **SonoriaResults** — coût (heures perdues, $50k+ coûts cachés)
5. **SonoriaShift** — comparaison Avant/Après
6. **SonoriaMethod** — "Vous ne créez pas de procédures. On fait tout pour vous."
7. **SonoriaProcess** — implémentation en 14 jours
8. **SonoriaResultsFinal** — résultats opérationnels
9. **SonoriaCTA** — CTA final low-friction
+ **SonoriaFooter**

### Niche cible
**Manufacturier & Construction** (PME 10-200 employés). Ton : direct, concret, axé réalité du terrain (shop floor / chantier). Pas de buzzwords ("AI", "innovation", "transformation"). Audience : directeurs des opérations / chefs d'usine / chefs de chantier.

### Positionnement
Service **Done-for-you** 14 jours qui transforme documents/vidéos/savoir des employés en système de chat IA interrogeable en temps réel sur le terrain. Bénéfices : moins d'interruptions, moins d'erreurs, formation accélérée, fin des silos de connaissance.

---

## 8. CTA / Liens externes

Tous les boutons "Réserver" / "Appel découverte" pointent vers :
```
https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte
```

---

## 9. Routes

```tsx
<Route path="/" element={<Index />} />
<Route path="/questionnaire" element={<Questionnaire />} />
<Route path="*" element={<NotFound />} />
```

---

## 10. Backend Supabase (optionnel)

Le projet a `@supabase/supabase-js` installé mais la landing fonctionne **sans backend**. Le client Supabase est dans `src/integrations/supabase/client.ts` (auto-généré par Lovable Cloud). Si tu n'utilises pas Supabase, supprime ce dossier et la dépendance.

Pour l'utiliser : crée un projet Supabase, ajoute `.env` :
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_PROJECT_ID=...
```

---

## 11. SEO

- Title < 60 chars avec mot-clé
- Meta description < 160 chars
- Un seul H1 par page
- Alt text sur toutes les images
- `public/robots.txt` + `public/sitemap.xml` fournis

---

## 12. Prompt à donner à Claude Code

Voici un prompt prêt à l'emploi :

> J'ai un dossier complet du code source d'une landing page React/Vite/Tailwind appelée Sonoria (target : manufacturier & construction). Reproduis-la à l'identique en respectant :
> 1. La stack exacte (voir package.json)
> 2. Le design system HSL dans index.css (jamais de couleurs Tailwind directes)
> 3. La structure de 9 sections du tunnel de conversion
> 4. Le système i18n FR/EN custom (LanguageContext)
> 5. Les CTAs pointant vers Calendly
> 6. Le ton direct et concret (pas de buzzwords)
>
> Lis `CLAUDE_CODE_INSTRUCTIONS.md` puis copie tous les fichiers du dossier `src/` et `public/` tels quels. Installe les dépendances avec `npm install` puis lance `npm run dev`.

---

## 13. Commandes utiles

```bash
npm run dev          # dev server
npm run build        # production build
npm run lint         # eslint
```

Bonne reconstruction ! 🚀
