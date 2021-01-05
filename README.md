## xcls

this package is made to merge classnames with conditions, i'm aware of the very popular package `classnames` but i don't
like how it handles condition, so this is was born

## Install

```
npm i xcls
```

or

```
yarn add xcls
```

## Usage

```js
import cls from 'xcls';

// signature -> cls(...args: (string | [boolean, string, string?] | null | undefined)[]): string;

// basic example
cls('px-4 py-1', 'bg-purple'); // 'px-4 py-1 bg-purple'

// with conditions
let isButtonActive = true;
cls('px-4 py-1', [isButtonActive, 'bg-blue', 'bg-purple']); // 'px-4 py-1 bg-blue'

// state changes
isButtonActive = false;
cls('px-4 py-1', [isButtonActive, 'bg-blue', 'bg-purple']); // 'px-4 py-1 bg-purple'
```
