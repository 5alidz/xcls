export type ClassName = string | null | undefined;
export type ClassNameArg = ClassName | [boolean, ClassName, ClassName?];

const pad = (s: string) => s.trim() + ' ';

export default function cls(...classesToMerge: ClassNameArg[]): string {
  let result = '';

  for (let i = 0; i < classesToMerge.length; i++) {
    const current = classesToMerge[i];
    if (!current) continue; // ignore any valsy value, also skips over empty string;

    if (typeof current == 'string') {
      result += pad(current);
      continue;
    }

    if (Array.isArray(current)) {
      const [condition, className, fallback] = current;
      if (condition && className && typeof className === 'string') {
        result += pad(className);
      }
      if (!condition && fallback && typeof fallback === 'string') {
        result += pad(fallback);
      }
    }
  }

  return result.trim();
}
