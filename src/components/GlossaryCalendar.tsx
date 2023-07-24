// Styles
import * as S from "@/styles/GlossaryCalendarStyles";

const GlossaryCalendar = () => {
  const glossaryItems = {
    eclipses: {
      "Eclipse Solar Total": "🌑",
      "Eclipse Solar Parcial": "🌘",
      "Eclipse Solar Anular": "☀️",
      "Eclipse Lunar Total": "🌕",
      "Eclipse Lunar Parcial": "🌗",
      "Eclipse Lunar Penumbral": "🌔",
    },
    moonEvents: {
      Microlua: "🌜",
      Superlua: "🌝",
      "Lua Azul": "🔵",
    },
  };

  return (
    <S.GlossaryContainer>
      <S.Column>
        <S.Title>Eclipses</S.Title>
        <ul>
          {Object.entries(glossaryItems.eclipses).map(([term, emoji]) => (
            <li key={term}>
              <S.Term>{term}</S.Term>
              <S.Emoji>{emoji}</S.Emoji>
            </li>
          ))}
        </ul>
      </S.Column>

      <S.Column>
        <S.Title>Eventos Lunares</S.Title>
        <ul>
          {Object.entries(glossaryItems.moonEvents).map(([term, emoji]) => (
            <li key={term}>
              <S.Term>{term}</S.Term>
              <S.Emoji>{emoji}</S.Emoji>
            </li>
          ))}
        </ul>
      </S.Column>
    </S.GlossaryContainer>
  );
};

export default GlossaryCalendar;
