export type ClassName = string | null | undefined;
export type ClassNameArg = ClassName | [boolean, ClassName, ClassName?];

export default function cls(...classesToMerge: ClassNameArg[]): string {
  let result = '';
  for (let i = 0; i < classesToMerge.length; i++) {
    const current = classesToMerge[i];
    const padding = ' ';
    if (current && typeof current === 'string') {
      result += current.trim() + padding;
      continue;
    }
    if (Array.isArray(current)) {
      const [condition, className, fallback] = current;
      if (condition && className && typeof className === 'string') {
        result += className.trim() + padding;
      }
      if (!condition && fallback && typeof fallback === 'string') {
        result += fallback.trim() + padding;
      }
    }
  }
  return result.trim();
}
