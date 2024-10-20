import { Highlight } from "./highlight";

export const renderWithHighlights = (text: string) => {
  const parts = text.split("{highlight}");
  
  return parts.map((part, index) =>
    index % 2 === 0 ? part : <Highlight key={`${index}${part}`}>{part}</Highlight>
  );
};