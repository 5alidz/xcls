## xcls

this package is made to merge classnames with conditions, i'm aware of the very popular package `classnames` but i don't
like how it handles condition, so this is was born

## Usage

```
npm i xcls
or
yarn add xcls
```

```js
import cls from 'xcls';

// signature -> cls(...args): string;
// type args = string | [boolean, string, string?] | null | undefined;

// basic usage example
cls('px-4 py-1', 'bg-purple'); // 'px-4 py-1 bg-purple'

// with conditions
const isButtonActive = true;
cls('px-4 py-1', [isButtonActive, 'bg-blue', 'bg-purple']); // 'px-4 py-1 bg-blue'
```

## Why?

this small utility helps cleaning up class names styling soluotions like tailwindcss, bootstrap etc.
