// Recognize common UTF-8 bytes mistakenly decoded as Windows-1252, while
// allowing normal accented names, punctuation and non-Latin text.
const brokenText = /\uFFFD|[\u0080-\u009F]|\u00C2[\u00A0-\u00BF]|\u00C3[\u0080-\u00BF]|\u00E2(?:\u20AC|\u2020|\u02C6|\u0080)|\u00EF\u00BF\u00BD/;

export function assertTextIntegrity(text, source) {
  const match = brokenText.exec(text);
  if (match) {
    const line = text.slice(0, match.index).split('\n').length;
    throw new Error(`Garbled text in ${source}, line ${line}. Save the original text as UTF-8 before publishing.`);
  }
}
