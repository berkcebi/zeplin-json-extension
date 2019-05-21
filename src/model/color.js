export default class Color {
    constructor({
        name,
        red,
        green,
        blue,
        hex,
        alpha
    }) {
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
            default:
        }
    }

    static fromZeplinColors(zeplinColors, context) {
        return zeplinColors.map(zeplinColor => Color.fromZeplinColor(zeplinColor, context));
    }
}
