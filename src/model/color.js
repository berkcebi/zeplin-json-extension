export default class Color {
  constructor({ name, red, green, blue, hex, alpha }) {
    Object.assign(this, {
      name,
      red,
      green,
      blue,
      hex,
      alpha
    });
  }

  static fromZeplinColor(zeplinColor, context) {
    const representation = context.getOption("colorRepresentation");

    switch (representation) {
      case "rgba": {
        return new Color({
          name: zeplinColor.name,
          red: zeplinColor.r,
          green: zeplinColor.g,
          blue: zeplinColor.b,
          alpha: zeplinColor.a
        });
      }
      case "hex": {
        const hex = zeplinColor.toHex();

        return new Color({
          name: zeplinColor.name,
          hex: hex.r + hex.g + hex.b,
          alpha: zeplinColor.a
        });
      }
      case "hsla": {
        return new Color({
          name: zeplinColor.name,
          hsla: this.rgbaToHsla(
            zeplinColor.r,
            zeplinColor.g,
            zeplinColor.b,
            zeplinColor.a
          )
        });
      }
      default:
    }
  }

  static fromZeplinColors(zeplinColors, context) {
    return zeplinColors.map(zeplinColor =>
      Color.fromZeplinColor(zeplinColor, context)
    );
  }

  static rgbaToHsla(red, green, blue, a) {
    let r = red / 255;
    let g = green / 255;
    let b = blue / 255;

    let cmin = Math.min(r, g, b);
    let cmax = Math.max(r, g, b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    // Calculate hue
    if (delta === 0) {
      // No difference
      h = 0;
    } else if (cmax === r) {
      // Red is max
      h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
      // Green is max
      h = (b - r) / delta + 2;
    } else {
      // Blue is max
      h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) {
      h += 360;
    }

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
  }
}
