# Zeplin JSON Extension

Generates simple JSON representations of Styleguide colors and text styles. 🗂

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

Supports either RGB or Hex. Sample colors output, as Hex:
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
