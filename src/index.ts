export type ClassName = string | null | undefined;

export default function cls(...classesToMerge: (ClassName | [boolean, ClassName, ClassName?])[]): string {
  const classes: string[] = [];
  for (let i = 0; i < classesToMerge.length; i++) {
    const current = classesToMerge[i];
    if (Array.isArray(current)) {
      const [condition, className, fallbackClassName] = current;
      if (condition && className && typeof className === 'string') {
        classes.push(className.trim());
      } else if (!condition && fallbackClassName && typeof fallbackClassName === 'string') {
        classes.push(fallbackClassName.trim());
      }
    } else if (typeof current === 'string' && current.length > 0) {
      classes.push(current.trim());
    }
  }
  return classes.join(' ');
}
