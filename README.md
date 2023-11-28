# lorem-intl

## Overview

> Generate Lorem Ipsum and placeholder text in multiple languages.

## Install

```sh
$ npm install lorem-intl
```

## Usage

```js
const { loremIntl } = require("lorem-intl");

loremIntl.text();
//=> 'Lorem ipsum dolor sit ...'

loremIntl.mandarin();
//=> '在一个充满科 ...'

loremIntl.spanish();
//=> 'El rápido zorro marrón ...'
```

```js
const myLoremIntl = loremIntl.create({
  defaultLanguage: "english",
  defaultSize: "short",
});
myLoremIntl.text();
//=> 'The quick brown fox jumps ...'
```

## API

### .text()

Get the default placeholder text.

### .create(config?)

Create a new instance of `loremIntl` with a custom config.

#### config

Type: `Config`

Default: `{ defaultSize: 'medium', defaultLanguage: 'latin' }`

### .supported-language(size?)

Get a placeholder text by language.

#### size

Type: `Size`

Default: `'medium'`

## Supported Languages

Placeholder text are available for the following languages:

- `arabic`

- `english`

- `hindi`

- `latin`

- `mandarin`

- `spanish`
