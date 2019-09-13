# JSON Design Tokens Zeplin Extension

Generates design tokens in JSON, for colors and text styles. 🗂

Regardless of which tool the designs are exported from, this extension lets you export JSON files from colors and text styles defined in Zeplin projects and styleguides. Based on internal needs, developers can transform these JSON files and generate code snippets or resources for various platforms.

Sample colors output:
```json
[
  {
    "name": "yellow",
    "red": 254,
    "green": 207,
    "blue": 51,
    "alpha": 1
  },
  {
    "name": "lightOrange",
    "red": 253,
    "green": 189,
    "blue": 57,
    "alpha": 1
  }
]
```

Sample text style output:
```json
[
  {
    "name": "Normal",
    "color": {
      "red": 87,
      "green": 71,
      "blue": 81,
      "alpha": 1
    },
    "letterSpacing": 1,
    "lineHeight": 32,
    "alignment": "left",
    "font": {
      "postscriptName": "SFProDisplay-Regular",
      "family": "SFProDisplay",
      "size": 26,
      "weight": "regular",
      "stretch": "normal"
    }
  }
]
```

### Options

#### Color representation

Supports RGB, HSLA and Hex. Sample colors output, as Hex:
```json
[
  {
    "name": "yellow",
    "hex": "fecf33",
    "alpha": 1
  },
  {
    "name": "lightOrange",
    "hex": "fdbd39",
    "alpha": 1
  }
]
```

#### Include referenced styleguides

Whether to include colors and text styles from referenced styleguides. For a project, referenced styleguides include the project's linked styleguide and its parent styleguides. For a styleguide, referenced styleguides include the styleguide's parent styleguides.

## Development

Zeplin JSON extension is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create and test extensions.
