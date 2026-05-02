import { useState } from "react";

const data = {
  english: {
    name: "Inglês",
    flag: "🇺🇸",
    color: "#1a3a5c",
    accent: "#4a9eff",
    note: "Língua germânica — mais distante do português",
    levels: [
      {
        from: "A1", to: "A2", topics: 10, lessons: 100,
        subjects: [
          { name: "Apresentações e saudações", lessons: 5 },
          { name: "Números, datas e horas", lessons: 8 },
          { name: "Família e pessoas", lessons: 8 },
          { name: "Comida e bebida", lessons: 8 },
          { name: "Rotina diária e presente simples", lessons: 10 },
          { name: "Lugares e direções", lessons: 8 },
          { name: "Compras e dinheiro", lessons: 8 },
          { name: "Tempo livre e hobbies", lessons: 8 },
          { name: "Passado simples (introdução)", lessons: 10 },
          { name: "Revisão e prática", lessons: 10 },
        ]
      },
      {
        from: "A2", to: "B1", topics: 11, lessons: 135,
        subjects: [
          { name: "Passado simples e contínuo", lessons: 12 },
          { name: "Futuro (will, going to)", lessons: 10 },
          { name: "Saúde e corpo humano", lessons: 10 },
          { name: "Trabalho e profissões", lessons: 10 },
          { name: "Viagens e transporte", lessons: 12 },
          { name: "Comparações e adjetivos", lessons: 8 },
          { name: "Phrasal verbs básicos", lessons: 12 },
          { name: "Present perfect (introdução)", lessons: 12 },
          { name: "Opiniões e debates simples", lessons: 10 },
          { name: "Leitura e escuta intermediária", lessons: 10 },
          { name: "Revisão e prática", lessons: 12 },
        ]
      },
      {
        from: "B1", to: "B2", topics: 13, lessons: 200,
        subjects: [
          { name: "Present perfect simples e contínuo", lessons: 14 },
          { name: "Condicionais (1ª, 2ª e 3ª)", lessons: 14 },
          { name: "Voz passiva", lessons: 10 },
          { name: "Reported speech", lessons: 12 },
          { name: "Phrasal verbs intermediários", lessons: 14 },
          { name: "Vocabulário acadêmico e formal", lessons: 12 },
          { name: "Argumentação e debate", lessons: 14 },
          { name: "Escrita: e-mails e textos formais", lessons: 12 },
          { name: "Listening avançado (sotaques variados)", lessons: 14 },
          { name: "Expressões idiomáticas", lessons: 12 },
          { name: "Gramática avançada (modais)", lessons: 14 },
          { name: "Revisão e prática", lessons: 14 },
        ]
      },
      {
        from: "B2", to: "C1", topics: 11, lessons: 250,
        subjects: [
          { name: "Estruturas complexas de gramática", lessons: 18 },
          { name: "Vocabulário avançado e colocações", lessons: 16 },
          { name: "Idioms e expressões naturais", lessons: 16 },
          { name: "Escrita acadêmica e profissional", lessons: 18 },
          { name: "Leitura de textos complexos", lessons: 16 },
          { name: "Listening nativo (podcasts, filmes)", lessons: 18 },
          { name: "Apresentações e oratória", lessons: 14 },
          { name: "Discussões abstratas e filosóficas", lessons: 16 },
          { name: "Nuances culturais e humor", lessons: 12 },
          { name: "Preparação para exames (IELTS/TOEFL)", lessons: 14 },
          { name: "Revisão e fluência oral", lessons: 18 },
        ]
      },
      {
        from: "C1", to: "C2", topics: 10, lessons: 300,
        subjects: [
          { name: "Gramática de precisão total", lessons: 20 },
          { name: "Vocabulário literário e técnico", lessons: 24 },
          { name: "Leitura de literatura e jornalismo", lessons: 24 },
          { name: "Escrita criativa e ensaios avançados", lessons: 24 },
          { name: "Debate e retórica avançada", lessons: 20 },
          { name: "Sotaques e variações regionais", lessons: 16 },
          { name: "Humor, ironia e sarcasmo", lessons: 16 },
          { name: "Linguagem profissional especializada", lessons: 20 },
          { name: "Imersão total (conteúdo 100% em inglês)", lessons: 24 },
          { name: "Revisão e polimento final", lessons: 20 },
        ]
      },
    ]
  },
  spanish: {
    name: "Espanhol",
    flag: "🇪🇸",
    color: "#5c1a1a",
    accent: "#ff6b4a",
    note: "Língua românica — muito próxima do português",
    levels: [
      {
        from: "A1", to: "A2", topics: 9, lessons: 70,
        subjects: [
          { name: "Saudações e apresentações", lessons: 4 },
          { name: "Números, datas e horas", lessons: 6 },
          { name: "Família e descrições pessoais", lessons: 6 },
          { name: "Comida e restaurantes", lessons: 6 },
          { name: "Presente do indicativo", lessons: 8 },
          { name: "Lugares e direções", lessons: 6 },
          { name: "Compras e preços", lessons: 6 },
          { name: "Hobbies e tempo livre", lessons: 6 },
          { name: "Revisão e prática", lessons: 8 },
        ]
      },
      {
        from: "A2", to: "B1", topics: 10, lessons: 100,
        subjects: [
          { name: "Pretérito indefinido e imperfecto", lessons: 10 },
          { name: "Futuro simples e próximo", lessons: 8 },
          { name: "Saúde e corpo humano", lessons: 8 },
          { name: "Trabalho e profissões", lessons: 8 },
          { name: "Viagens e transporte", lessons: 10 },
          { name: "Comparações e superlativos", lessons: 7 },
          { name: "Verbos reflexivos e pronomes", lessons: 10 },
          { name: "Pretérito perfecto", lessons: 10 },
          { name: "Expressões do cotidiano", lessons: 8 },
          { name: "Revisão e prática", lessons: 10 },
        ]
      },
      {
        from: "B1", to: "B2", topics: 12, lessons: 150,
        subjects: [
          { name: "Subjuntivo presente (introdução)", lessons: 12 },
          { name: "Condicionais e hipóteses", lessons: 12 },
          { name: "Voz passiva e se impessoal", lessons: 8 },
          { name: "Estilo indireto", lessons: 10 },
          { name: "Modismos e expressões coloquiais", lessons: 12 },
          { name: "Vocabulário formal e acadêmico", lessons: 10 },
          { name: "Argumentação oral", lessons: 12 },
          { name: "Escrita formal e informal", lessons: 10 },
          { name: "Listening com sotaques variados", lessons: 12 },
          { name: "Subjuntivo passado", lessons: 12 },
          { name: "Revisão e prática", lessons: 12 },
        ]
      },
      {
        from: "B2", to: "C1", topics: 11, lessons: 200,
        subjects: [
          { name: "Subjuntivo avançado e usos complexos", lessons: 16 },
          { name: "Vocabulário avançado e colocações", lessons: 14 },
          { name: "Idioms e expressões naturais", lessons: 14 },
          { name: "Escrita acadêmica e profissional", lessons: 16 },
          { name: "Leitura de textos literários", lessons: 14 },
          { name: "Listening nativo (podcasts, séries)", lessons: 16 },
          { name: "Apresentações e debates", lessons: 12 },
          { name: "Diferenças regionais (latam vs espanha)", lessons: 12 },
          { name: "Nuances culturais e humor", lessons: 10 },
          { name: "Preparação para exames (DELE)", lessons: 12 },
          { name: "Revisão e fluência oral", lessons: 16 },
        ]
      },
      {
        from: "C1", to: "C2", topics: 9, lessons: 230,
        subjects: [
          { name: "Gramática de precisão total", lessons: 18 },
          { name: "Vocabulário literário e técnico", lessons: 20 },
          { name: "Leitura de literatura hispânica", lessons: 20 },
          { name: "Escrita criativa e ensaios", lessons: 22 },
          { name: "Debate e retórica avançada", lessons: 18 },
          { name: "Variantes regionais e dialetos", lessons: 14 },
          { name: "Humor, ironia e sarcasmo", lessons: 14 },
          { name: "Linguagem profissional especializada", lessons: 18 },
          { name: "Imersão total e polimento final", lessons: 22 },
        ]
      },
    ]
  },
  italian: {
    name: "Italiano",
    flag: "🇮🇹",
    color: "#1a4a1a",
    accent: "#4aff8a",
    note: "Língua românica — próxima, mas com fonética distinta",
    levels: [
      {
        from: "A1", to: "A2", topics: 9, lessons: 75,
        subjects: [
          { name: "Saudações e apresentações", lessons: 4 },
          { name: "Números, datas e horas", lessons: 6 },
          { name: "Família e descrições", lessons: 7 },
          { name: "Comida e culinária italiana", lessons: 8 },
          { name: "Presente do indicativo", lessons: 8 },
          { name: "Lugares e direções", lessons: 7 },
          { name: "Compras e mercado", lessons: 6 },
          { name: "Hobbies e tempo livre", lessons: 6 },
          { name: "Revisão e prática", lessons: 8 },
        ]
      },
      {
        from: "A2", to: "B1", topics: 11, lessons: 110,
        subjects: [
          { name: "Passato prossimo e imperfetto", lessons: 12 },
          { name: "Futuro simples", lessons: 8 },
          { name: "Saúde e corpo", lessons: 8 },
          { name: "Trabalho e profissões", lessons: 8 },
          { name: "Viagens e transporte", lessons: 10 },
          { name: "Comparações e adjetivos", lessons: 7 },
          { name: "Pronomes diretos e indiretos", lessons: 10 },
          { name: "Verbos modais (dovere, potere, volere)", lessons: 10 },
          { name: "Expressões cotidianas", lessons: 8 },
          { name: "Condicionale (introdução)", lessons: 8 },
          { name: "Revisão e prática", lessons: 10 },
        ]
      },
      {
        from: "B1", to: "B2", topics: 12, lessons: 160,
        subjects: [
          { name: "Congiuntivo presente e passato", lessons: 14 },
          { name: "Condicionais e hipóteses", lessons: 12 },
          { name: "Voz passiva", lessons: 8 },
          { name: "Discurso indireto", lessons: 10 },
          { name: "Expressões idiomáticas italianas", lessons: 12 },
          { name: "Vocabulário formal", lessons: 10 },
          { name: "Argumentação oral", lessons: 12 },
          { name: "Escrita formal e informal", lessons: 12 },
          { name: "Listening com dialetos regionais", lessons: 12 },
          { name: "Congiuntivo imperfetto e trapassato", lessons: 12 },
          { name: "Gerúndio e particípio", lessons: 10 },
          { name: "Revisão e prática", lessons: 12 },
        ]
      },
      {
        from: "B2", to: "C1", topics: 11, lessons: 210,
        subjects: [
          { name: "Congiuntivo avançado e complexo", lessons: 16 },
          { name: "Vocabulário avançado e colocações", lessons: 16 },
          { name: "Idioms e expressões naturais", lessons: 14 },
          { name: "Escrita acadêmica e profissional", lessons: 16 },
          { name: "Leitura de textos literários", lessons: 16 },
          { name: "Listening nativo (podcasts, filmes)", lessons: 18 },
          { name: "Apresentações e debates", lessons: 14 },
          { name: "Dialetos e variações regionais", lessons: 12 },
          { name: "Nuances culturais e humor", lessons: 12 },
          { name: "Preparação para exames (CILS/CELI)", lessons: 14 },
          { name: "Revisão e fluência oral", lessons: 16 },
        ]
      },
      {
        from: "C1", to: "C2", topics: 9, lessons: 240,
        subjects: [
          { name: "Gramática de precisão total", lessons: 18 },
          { name: "Vocabulário literário e técnico", lessons: 22 },
          { name: "Leitura de literatura italiana", lessons: 22 },
          { name: "Escrita criativa e ensaios", lessons: 22 },
          { name: "Debate e retórica avançada", lessons: 18 },
          { name: "Dialetos e variações regionais", lessons: 14 },
          { name: "Humor, ironia e cultura", lessons: 14 },
          { name: "Linguagem profissional especializada", lessons: 18 },
          { name: "Imersão total e polimento final", lessons: 24 },
        ]
      },
    ]
  },
  french: {
    name: "Francês",
    flag: "🇫🇷",
    color: "#1a1a4a",
    accent: "#a04aff",
    note: "Língua românica — ortografia complexa e fonética distinta",
    levels: [
      {
        from: "A1", to: "A2", topics: 10, lessons: 85,
        subjects: [
          { name: "Saudações e apresentações", lessons: 5 },
          { name: "Números, datas e horas", lessons: 7 },
          { name: "Família e descrições pessoais", lessons: 7 },
          { name: "Comida e restaurantes", lessons: 8 },
          { name: "Presente do indicativo (grupos 1, 2, 3)", lessons: 10 },
          { name: "Lugares e direções", lessons: 7 },
          { name: "Compras e dinheiro", lessons: 7 },
          { name: "Hobbies e tempo livre", lessons: 7 },
          { name: "Artigos e gênero gramatical", lessons: 8 },
          { name: "Revisão e prática", lessons: 8 },
        ]
      },
      {
        from: "A2", to: "B1", topics: 12, lessons: 125,
        subjects: [
          { name: "Passé composé e imparfait", lessons: 12 },
          { name: "Futur simple e futur proche", lessons: 8 },
          { name: "Saúde e corpo humano", lessons: 8 },
          { name: "Trabalho e profissões", lessons: 8 },
          { name: "Viagens e transporte", lessons: 10 },
          { name: "Comparações e adjetivos", lessons: 7 },
          { name: "Pronomes (COD, COI, en, y)", lessons: 12 },
          { name: "Verbos pronominais e reflexivos", lessons: 10 },
          { name: "Plus-que-parfait (introdução)", lessons: 10 },
          { name: "Expressões do cotidiano", lessons: 8 },
          { name: "Fonética e liaison", lessons: 10 },
          { name: "Revisão e prática", lessons: 10 },
        ]
      },
      {
        from: "B1", to: "B2", topics: 13, lessons: 175,
        subjects: [
          { name: "Subjonctif présent e passé", lessons: 14 },
          { name: "Conditionnel présent e passé", lessons: 12 },
          { name: "Voz passiva", lessons: 8 },
          { name: "Discurso indireto", lessons: 10 },
          { name: "Expressões idiomáticas francesas", lessons: 12 },
          { name: "Vocabulário formal e acadêmico", lessons: 10 },
          { name: "Argumentação oral", lessons: 12 },
          { name: "Escrita formal e informal", lessons: 12 },
          { name: "Listening com sotaques (belga, québecois)", lessons: 12 },
          { name: "Gérondif e participe présent", lessons: 10 },
          { name: "Registros de linguagem (familier/soutenu)", lessons: 12 },
          { name: "Ortografia avançada", lessons: 10 },
          { name: "Revisão e prática", lessons: 12 },
        ]
      },
      {
        from: "B2", to: "C1", topics: 11, lessons: 220,
        subjects: [
          { name: "Subjonctif avançado e usos complexos", lessons: 18 },
          { name: "Vocabulário avançado e colocações", lessons: 16 },
          { name: "Expressões e argot naturais", lessons: 14 },
          { name: "Escrita acadêmica e profissional", lessons: 18 },
          { name: "Leitura de textos literários", lessons: 16 },
          { name: "Listening nativo (podcasts, cinema)", lessons: 18 },
          { name: "Apresentações e debates", lessons: 14 },
          { name: "Variantes regionais (québec, belgique, africa)", lessons: 12 },
          { name: "Nuances culturais e humor", lessons: 10 },
          { name: "Preparação para exames (DELF/DALF)", lessons: 14 },
          { name: "Revisão e fluência oral", lessons: 16 },
        ]
      },
      {
        from: "C1", to: "C2", topics: 9, lessons: 250,
        subjects: [
          { name: "Gramática de precisão total", lessons: 20 },
          { name: "Vocabulário literário e técnico", lessons: 22 },
          { name: "Leitura de literatura francesa", lessons: 22 },
          { name: "Escrita criativa e ensaios", lessons: 24 },
          { name: "Debate e retórica avançada", lessons: 20 },
          { name: "Variantes regionais e francofonia", lessons: 14 },
          { name: "Humor, ironia e cultura francesa", lessons: 14 },
          { name: "Linguagem profissional especializada", lessons: 18 },
          { name: "Imersão total e polimento final", lessons: 22 },
        ]
      },
    ]
  }
};

const LANG_KEYS = ["english", "spanish", "italian", "french"];

const levelColors = {
  "A1→A2": "#6ee7b7",
  "A2→B1": "#93c5fd",
  "B1→B2": "#fbbf24",
  "B2→C1": "#f97316",
  "C1→C2": "#ec4899",
};

export default function App() {
  const [activeLang, setActiveLang] = useState("english");
  const [activeLevel, setActiveLevel] = useState(null);

  const lang = data[activeLang];
  const total = lang.levels.reduce((s, l) => s + l.lessons, 0);
  const totalTopics = lang.levels.reduce((s, l) => s + l.topics, 0);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'Georgia', serif",
      color: "#e8e0d0",
      padding: "0 0 60px 0"
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${lang.color}cc 0%, #0a0a0f 100%)`,
        borderBottom: `1px solid ${lang.accent}33`,
        padding: "36px 24px 28px",
        textAlign: "center",
        transition: "background 0.5s"
      }}>
        <div style={{ fontSize: 13, letterSpacing: 4, color: lang.accent, textTransform: "uppercase", marginBottom: 8, fontFamily: "monospace" }}>
          Roteiro de Fluência
        </div>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>
          Aprendizado de Idiomas
        </h1>
        <p style={{ margin: "8px 0 0", color: "#888", fontSize: 14 }}>
          Estimativa de tópicos e lições por nível · A1 → C2
        </p>
      </div>

      {/* Language Tabs */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 10,
        padding: "24px 16px 0",
        flexWrap: "wrap"
      }}>
        {LANG_KEYS.map(key => {
          const l = data[key];
          const active = activeLang === key;
          return (
            <button
              key={key}
              onClick={() => { setActiveLang(key); setActiveLevel(null); }}
              style={{
                background: active ? l.accent : "#1a1a22",
                color: active ? "#000" : "#ccc",
                border: `1px solid ${active ? l.accent : "#333"}`,
                borderRadius: 10,
                padding: "10px 22px",
                cursor: "pointer",
                fontWeight: active ? 700 : 400,
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s"
              }}
            >
              <span style={{ fontSize: 20 }}>{l.flag}</span> {l.name}
            </button>
          );
        })}
      </div>

      {/* Lang Note */}
      <div style={{
        textAlign: "center",
        margin: "14px 0 0",
        color: lang.accent,
        fontSize: 13,
        fontStyle: "italic"
      }}>
        {lang.note}
      </div>

      {/* Summary Cards */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 16,
        flexWrap: "wrap",
        padding: "24px 16px 0"
      }}>
        {[
          { label: "Total de Lições", value: total, suffix: "lições" },
          { label: "Total de Tópicos", value: totalTopics, suffix: "tópicos" },
          { label: "Em 1 lição/dia", value: `~${(total / 365).toFixed(1)}`, suffix: "anos" },
          { label: "Em 2 lições/dia", value: `~${(total / 730).toFixed(1)}`, suffix: "anos" },
        ].map((card, i) => (
          <div key={i} style={{
            background: "#13131a",
            border: `1px solid ${lang.accent}44`,
            borderRadius: 12,
            padding: "16px 24px",
            textAlign: "center",
            minWidth: 130
          }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: lang.accent }}>{card.value}</div>
            <div style={{ fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: 1 }}>{card.suffix}</div>
            <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{card.label}</div>
          </div>
        ))}
      </div>

      {/* Levels */}
      <div style={{ maxWidth: 720, margin: "32px auto 0", padding: "0 16px" }}>
        {lang.levels.map((level, idx) => {
          const key = `${level.from}→${level.to}`;
          const isOpen = activeLevel === idx;
          const barColor = Object.values(levelColors)[idx];
          const pct = Math.round((level.lessons / total) * 100);

          return (
            <div key={idx} style={{
              background: "#13131a",
              border: `1px solid ${isOpen ? barColor + "88" : "#222"}`,
              borderRadius: 14,
              marginBottom: 14,
              overflow: "hidden",
              transition: "border-color 0.2s"
            }}>
              {/* Level Header */}
              <button
                onClick={() => setActiveLevel(isOpen ? null : idx)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textAlign: "left"
                }}
              >
                {/* Badge */}
                <div style={{
                  background: barColor + "22",
                  border: `1px solid ${barColor}`,
                  borderRadius: 8,
                  padding: "4px 12px",
                  color: barColor,
                  fontWeight: 700,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  fontFamily: "monospace"
                }}>
                  {key}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ color: "#e8e0d0", fontSize: 14 }}>
                      <strong>{level.lessons}</strong> lições · <strong>{level.topics}</strong> tópicos
                    </span>
                    <span style={{ color: "#666", fontSize: 12 }}>{pct}% do total</span>
                  </div>
                  {/* Progress bar */}
                  <div style={{ background: "#222", borderRadius: 4, height: 6 }}>
                    <div style={{
                      width: `${pct}%`,
                      background: barColor,
                      height: "100%",
                      borderRadius: 4,
                      transition: "width 0.4s"
                    }} />
                  </div>
                </div>

                <div style={{ color: isOpen ? barColor : "#555", fontSize: 18, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "none" }}>
                  ▾
                </div>
              </button>

              {/* Subjects */}
              {isOpen && (
                <div style={{ padding: "0 20px 20px" }}>
                  <div style={{ borderTop: `1px solid #222`, paddingTop: 16 }}>
                    {level.subjects.map((sub, si) => (
                      <div key={si} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 0",
                        borderBottom: si < level.subjects.length - 1 ? "1px solid #1a1a22" : "none"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{
                            width: 6, height: 6,
                            borderRadius: "50%",
                            background: barColor,
                            flexShrink: 0
                          }} />
                          <span style={{ color: "#c8c0b0", fontSize: 14 }}>{sub.name}</span>
                        </div>
                        <div style={{
                          background: barColor + "22",
                          color: barColor,
                          borderRadius: 6,
                          padding: "2px 10px",
                          fontSize: 13,
                          fontWeight: 600,
                          fontFamily: "monospace",
                          whiteSpace: "nowrap"
                        }}>
                          {sub.lessons} lições
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Comparison Table */}
      <div style={{ maxWidth: 720, margin: "40px auto 0", padding: "0 16px" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "#888", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, textAlign: "center" }}>
          Comparativo Geral
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr>
                <th style={{ padding: "10px 14px", textAlign: "left", color: "#666", borderBottom: "1px solid #222", fontWeight: 400 }}>Transição</th>
                {LANG_KEYS.map(k => (
                  <th key={k} style={{ padding: "10px 14px", textAlign: "center", color: data[k].accent, borderBottom: "1px solid #222", fontWeight: 600 }}>
                    {data[k].flag} {data[k].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["A1→A2", "A2→B1", "B1→B2", "B2→C1", "C1→C2"].map((transition, ti) => (
                <tr key={transition} style={{ background: ti % 2 === 0 ? "#0f0f16" : "transparent" }}>
                  <td style={{ padding: "10px 14px", color: Object.values(levelColors)[ti], fontFamily: "monospace", fontWeight: 700 }}>{transition}</td>
                  {LANG_KEYS.map(k => (
                    <td key={k} style={{ padding: "10px 14px", textAlign: "center", color: "#c8c0b0" }}>
                      {data[k].levels[ti].lessons} lições
                    </td>
                  ))}
                </tr>
              ))}
              <tr style={{ background: "#13131a", borderTop: "2px solid #333" }}>
                <td style={{ padding: "12px 14px", color: "#fff", fontWeight: 700 }}>TOTAL</td>
                {LANG_KEYS.map(k => (
                  <td key={k} style={{ padding: "12px 14px", textAlign: "center", color: data[k].accent, fontWeight: 700, fontSize: 15 }}>
                    {data[k].levels.reduce((s, l) => s + l.lessons, 0)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ textAlign: "center", color: "#555", fontSize: 12, marginTop: 24 }}>
          * Estimativas baseadas em lições de ~1h para falantes nativos de português
        </p>
      </div>
    </div>
  );
}