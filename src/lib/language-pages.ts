import {
  GraduationCap,
  Briefcase,
  GlobeHemisphereWest,
  Buildings,
  ForkKnife,
  FilmSlate,
  Handshake,
  CurrencyCircleDollar,
  UsersThree,
  Books,
  Path,
  Certificate,
} from "@phosphor-icons/react/dist/ssr";
import type { LanguagePageData, Accent } from "@/components/sections/LanguagePage";

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1100&q=75`;

// Accent presets (reusing the misleadingly-named token scales: emerald=blue, etc.)
const blue: Accent = {
  soft: "bg-emerald-50",
  text: "text-emerald-700",
  strong: "text-emerald-600",
  button: "!bg-emerald-600 hover:!bg-emerald-700",
  node: "bg-emerald-600 text-white",
  ring: "ring-emerald-100",
  swoosh: "text-gold-400",
  tile: "bg-emerald-50 text-emerald-600",
};
const coral: Accent = {
  soft: "bg-coral-400/15",
  text: "text-coral-500",
  strong: "text-coral-500",
  button: "!bg-coral-500 hover:!bg-coral-400",
  node: "bg-coral-500 text-white",
  ring: "ring-coral-300/30",
  swoosh: "text-gold-400",
  tile: "bg-coral-400/15 text-coral-500",
};
const gold: Accent = {
  soft: "bg-gold-400/20",
  text: "text-gold-600",
  strong: "text-gold-500",
  button: "!bg-gold-400 !text-pine-900 hover:!bg-gold-300",
  node: "bg-gold-400 text-pine-900",
  ring: "ring-gold-300/40",
  swoosh: "text-emerald-400",
  tile: "bg-gold-400/20 text-gold-500",
};

export const languagePages: Record<string, LanguagePageData> = {
  french: {
    language: "French",
    tagline: "French · A1 to C1 · DELF / TEF",
    headlineLead: "From",
    headlineAccent: "Bonjour to fluent",
    intro:
      "Learn French for study and PR pathways in France and Canada. Our DELF/TEF-ready classes take you from your very first Bonjour to the B2 level top universities and immigration programmes look for.",
    greetings: [
      { native: "Bonjour !", en: "Hello!" },
      { native: "J'apprends le français", en: "I'm learning French" },
    ],
    ladderTitle: "Climb from A1 to C1, step by step",
    ladderSub: "Each level is exam-aligned so you're always ready for DELF or TEF certification.",
    levels: [
      { level: "A1", title: "Beginner", desc: "Greetings, numbers and everyday phrases. Where everyone starts.", weeks: "8 weeks" },
      { level: "A2", title: "Elementary", desc: "Simple conversations, routines and short texts.", weeks: "8 weeks" },
      { level: "B1", title: "Intermediate", desc: "The level many Canadian PR and study pathways reward.", weeks: "10 weeks" },
      { level: "B2 / C1", title: "Advanced", desc: "Fluency for French-taught degrees and skilled work.", weeks: "12 weeks" },
    ],
    whyTitle: "Why learn French with us",
    reasons: [
      { Icon: GraduationCap, title: "Study in France", desc: "Many French and English-taught programmes ask for proof of French." },
      { Icon: GlobeHemisphereWest, title: "Canada advantage", desc: "French scores can boost your Express Entry / PR profile significantly." },
      { Icon: Briefcase, title: "Global careers", desc: "French opens doors across Europe, Africa and international organisations." },
    ],
    faqs: [
      { q: "Do I need French to study in France?", a: "Many programmes are taught in English, but French-taught degrees and most stay-back/work pathways expect B1–B2. We map the exact level to your university." },
      { q: "Will French help my Canada PR?", a: "Yes. A valid TEF/TCF score in French can add significant points to your Express Entry profile, even for English-track applicants." },
      { q: "Which exam — DELF or TEF?", a: "DELF is academic/long-term; TEF/TCF is common for immigration. We help you choose and prepare for the right one." },
      { q: "How long to reach B1?", a: "From zero, roughly A1 (8 wks) + A2 (8 wks) + B1 (10 wks). Intensive batches compress this if you have a deadline." },
    ],
    ctaHeading: "Say your first French sentence this week",
    ctaPoints: ["Rolling intake", "DELF / TEF aligned", "Native-level trainers"],
    heroImg: u("1431274172761-fca41d930114"),
    heroAlt: "Student learning French, with the Eiffel Tower in Paris",
    accent: blue,
  },

  italian: {
    language: "Italian",
    tagline: "Italian · A1 to B2 · CILS / CELI",
    headlineLead: "From",
    headlineAccent: "Ciao to Italy",
    intro:
      "Beginner to intermediate Italian for study and life in Italy. Learn the language that unlocks low-tuition degrees, generous regional scholarships and one of Europe's most loved cultures.",
    greetings: [
      { native: "Ciao!", en: "Hi!" },
      { native: "Imparo l'italiano", en: "I'm learning Italian" },
    ],
    ladderTitle: "From A1 to B2, the Italian way",
    ladderSub: "CILS/CELI-aligned levels so you're ready for university and visa requirements.",
    levels: [
      { level: "A1", title: "Beginner", desc: "Greetings, basics and the rhythm of everyday Italian.", weeks: "8 weeks" },
      { level: "A2", title: "Elementary", desc: "Daily conversations, food, travel and short texts.", weeks: "8 weeks" },
      { level: "B1", title: "Intermediate", desc: "The level many Italian universities ask for.", weeks: "10 weeks" },
      { level: "B2", title: "Upper-intermediate", desc: "Confident fluency for Italian-taught degrees.", weeks: "12 weeks" },
    ],
    whyTitle: "Why learn Italian with us",
    reasons: [
      { Icon: GraduationCap, title: "Low-cost degrees", desc: "Italy offers affordable public-university tuition and regional scholarships." },
      { Icon: Buildings, title: "Study & live", desc: "Even English-taught students settle in faster with everyday Italian." },
      { Icon: ForkKnife, title: "Culture & lifestyle", desc: "Art, food and history — Italian unlocks all of it, not just the classroom." },
    ],
    faqs: [
      { q: "Do I need Italian to study in Italy?", a: "English-taught programmes may need little Italian, but Italian-taught degrees and daily life expect A2–B1. We match it to your course." },
      { q: "Are scholarships available?", a: "Yes. Italy has generous regional (DSU) scholarships and tuition waivers — basic Italian strengthens your application and settling-in." },
      { q: "Which exam should I take?", a: "CILS and CELI are the recognised certifications. We guide you to the right one and prepare you for it." },
      { q: "Online or in person?", a: "Both. We run live online and in-centre batches with the same trainers and material." },
    ],
    ctaHeading: "Start speaking Italian this week",
    ctaPoints: ["Rolling intake", "CILS / CELI aligned", "Native-level trainers"],
    heroImg: u("1523906834658-6e24ef2386f9"),
    heroAlt: "Student learning Italian, with a view of Italy",
    accent: coral,
  },

  japanese: {
    language: "Japanese",
    tagline: "Japanese · JLPT N5 to N3",
    headlineLead: "From",
    headlineAccent: "Konnichiwa to Japan",
    intro:
      "JLPT-focused Japanese for study, scholarships and work in Japan. From hiragana to confident conversation, we prepare you for the JLPT levels universities and employers value most.",
    greetings: [
      { native: "こんにちは", en: "Hello!" },
      { native: "日本語を勉強します", en: "I'm learning Japanese" },
    ],
    ladderTitle: "Climb the JLPT ladder, N5 to N3",
    ladderSub: "Structured around the Japanese-Language Proficiency Test so progress is measurable.",
    levels: [
      { level: "N5", title: "Foundation", desc: "Hiragana, katakana and basic everyday Japanese.", weeks: "10 weeks" },
      { level: "N4", title: "Elementary", desc: "Core grammar, kanji and simple conversations.", weeks: "12 weeks" },
      { level: "N3", title: "Intermediate", desc: "The level many scholarships and jobs in Japan look for.", weeks: "14 weeks" },
      { level: "N2+", title: "Advanced", desc: "Fluency for Japanese-taught study and skilled work.", weeks: "On request" },
    ],
    whyTitle: "Why learn Japanese with us",
    reasons: [
      { Icon: GraduationCap, title: "Study in Japan", desc: "MEXT and university scholarships often favour JLPT-certified applicants." },
      { Icon: Briefcase, title: "Work pathways", desc: "Japanese opens engineering, IT and specified-skilled-worker routes." },
      { Icon: FilmSlate, title: "Love the culture", desc: "Anime, games and pop culture make learning genuinely fun." },
    ],
    faqs: [
      { q: "Which JLPT level do I need for Japan?", a: "Many programmes accept English, but scholarships, daily life and most jobs reward N3 or higher. We set your target by your goal." },
      { q: "Is Japanese hard to learn?", a: "The script looks daunting, but our N5 track builds hiragana, katakana and kanji step by step — most students surprise themselves." },
      { q: "Do you prepare for the JLPT exam?", a: "Yes. Every level is JLPT-aligned with mock tests, so you walk into the real exam already familiar with the format." },
      { q: "How long to reach N3?", a: "From zero, roughly N5 (10 wks) + N4 (12 wks) + N3 (14 wks), depending on study hours and pace." },
    ],
    ctaHeading: "Say your first Japanese sentence this week",
    ctaPoints: ["JLPT aligned", "Mock tests", "Native-level trainers"],
    heroImg: u("1540959733332-eab4deabeeaf"),
    heroAlt: "Student learning Japanese, with a view of Japan",
    accent: gold,
  },

  chinese: {
    language: "Chinese (Mandarin)",
    tagline: "Mandarin · HSK 1 to HSK 4",
    headlineLead: "From",
    headlineAccent: "Nǐ hǎo to China",
    intro:
      "HSK-aligned Mandarin for China scholarships and exchange programmes. Master pinyin, tones and characters with trainers who get you exam-ready and conversation-confident.",
    greetings: [
      { native: "你好", en: "Hello!" },
      { native: "我在学中文", en: "I'm learning Chinese" },
    ],
    ladderTitle: "Climb the HSK ladder, 1 to 4",
    ladderSub: "Aligned to the official HSK exam that Chinese universities and scholarships use.",
    levels: [
      { level: "HSK 1", title: "Beginner", desc: "Pinyin, tones and your first 150 words.", weeks: "8 weeks" },
      { level: "HSK 2", title: "Elementary", desc: "Everyday phrases and basic characters.", weeks: "10 weeks" },
      { level: "HSK 3", title: "Intermediate", desc: "The level many China scholarships ask for.", weeks: "12 weeks" },
      { level: "HSK 4", title: "Upper-intermediate", desc: "Fluency for degree study and exchange.", weeks: "14 weeks" },
    ],
    whyTitle: "Why learn Mandarin with us",
    reasons: [
      { Icon: GraduationCap, title: "China scholarships", desc: "CSC and university scholarships often favour HSK-certified students." },
      { Icon: CurrencyCircleDollar, title: "Career edge", desc: "Mandarin is a standout skill across trade, tech and manufacturing." },
      { Icon: UsersThree, title: "1.1bn speakers", desc: "One of the world's most spoken languages — useful far beyond China." },
    ],
    faqs: [
      { q: "Which HSK level do I need?", a: "Many English-taught China programmes need little Chinese, but CSC scholarships and daily life reward HSK 3–4. We set your target by your plan." },
      { q: "Are the tones really that hard?", a: "Tones take practice, but our HSK 1 track drills them from day one with audio so they become natural quickly." },
      { q: "Do you prepare for the HSK exam?", a: "Yes — every level is HSK-aligned with mock papers, so the real exam feels familiar." },
      { q: "How long to reach HSK 4?", a: "From zero, roughly HSK 1–4 across 8–14 week blocks, depending on your study pace." },
    ],
    ctaHeading: "Say your first Mandarin sentence this week",
    ctaPoints: ["HSK aligned", "Mock tests", "Native-level trainers"],
    heroImg: u("1547981609-4b6bfe67ca0b"),
    heroAlt: "Student learning Chinese Mandarin, with a view of China",
    accent: coral,
  },

  korean: {
    language: "Korean",
    tagline: "Korean · TOPIK 1 to TOPIK 3",
    headlineLead: "From",
    headlineAccent: "Annyeong to Korea",
    intro:
      "TOPIK-ready Korean for Korea's growing roster of global degrees and scholarships. Learn Hangul, grammar and real conversation with trainers who make K-culture part of the lesson.",
    greetings: [
      { native: "안녕하세요", en: "Hello!" },
      { native: "한국어를 배워요", en: "I'm learning Korean" },
    ],
    ladderTitle: "Climb the TOPIK ladder, 1 to 3",
    ladderSub: "Built around the Test of Proficiency in Korean used by universities and scholarships.",
    levels: [
      { level: "Lv 1", title: "Beginner", desc: "Hangul, greetings and basic everyday Korean.", weeks: "10 weeks" },
      { level: "Lv 2", title: "Elementary", desc: "Core grammar and simple conversations (TOPIK I).", weeks: "12 weeks" },
      { level: "Lv 3", title: "Intermediate", desc: "The level many GKS scholarships and degrees reward.", weeks: "14 weeks" },
      { level: "Lv 4+", title: "Advanced", desc: "Fluency for Korean-taught study and work.", weeks: "On request" },
    ],
    whyTitle: "Why learn Korean with us",
    reasons: [
      { Icon: GraduationCap, title: "Study in Korea", desc: "GKS and university scholarships value TOPIK-certified applicants." },
      { Icon: Handshake, title: "Work & K-industry", desc: "Korean unlocks roles in tech, trade and the booming K-content world." },
      { Icon: FilmSlate, title: "K-culture", desc: "K-pop and K-drama make learning Korean genuinely addictive." },
    ],
    faqs: [
      { q: "Which TOPIK level do I need?", a: "English-taught Korean degrees may need little Korean, but GKS scholarships and daily life reward TOPIK level 3+. We set your target by your goal." },
      { q: "Is Hangul hard to learn?", a: "Hangul is famously logical — most students read basic Korean within the first couple of weeks." },
      { q: "Do you prepare for the TOPIK exam?", a: "Yes. Every level is TOPIK-aligned with mock tests so the real exam feels routine." },
      { q: "How long to reach TOPIK 3?", a: "From zero, roughly levels 1–3 across 10–14 week blocks, depending on study hours." },
    ],
    ctaHeading: "Say your first Korean sentence this week",
    ctaPoints: ["TOPIK aligned", "Mock tests", "Native-level trainers"],
    heroImg: u("1517154421773-0529f29ea451"),
    heroAlt: "Student learning Korean, with a view of Seoul, Korea",
    accent: blue,
  },
};
