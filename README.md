# xcls
Declartive classNames merging utility

[![GitHub license](https://img.shields.io/github/license/5alidz/xcls)](https://github.com/5alidz/xcls/blob/master/LICENSE) ![Minzipped size](https://img.shields.io/bundlephobia/minzip/xcls.svg)

## Install

```sh
# npm
npm i xcls

# yarn
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
