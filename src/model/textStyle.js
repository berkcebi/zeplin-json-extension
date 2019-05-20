import Color from "./color";

class Font {
    constructor({
        postscriptName,
        family,
        size,
        weight,
        stretch
    }) {
        Object.assign(this, {
            postscriptName,
            family,
            size,
            weight,
            stretch
        });
    }
}

export default class TextStyle {
    constructor({
        name,
        letterSpacing,
        lineHeight,
        alignment,
        font,
        color
    }) {
        Object.assign(this, {
            name,
            letterSpacing,
            lineHeight,
            alignment,
            font,
            color
        });
    }

    static fromZeplinTextStyle(zeplinTextStyle, context) {
        const containerType = "project" in context ? "project" : "styleguide";
        const container = context[containerType];

        let color;
        if (zeplinTextStyle.color) {
            const zeplinColor = container.findColorEqual(zeplinTextStyle.color) || zeplinTextStyle.color;

            color = Color.fromZeplinColor(zeplinColor, context);
        }

        const font = new Font({
            postscriptName: zeplinTextStyle.fontFace,
            family: zeplinTextStyle.fontFamily,
            size: zeplinTextStyle.fontSize,
            weight: zeplinTextStyle.weightText,
            stretch: zeplinTextStyle.fontStretch
        });

        return new TextStyle({
            name: zeplinTextStyle.name,
            letterSpacing: zeplinTextStyle.letterSpacing,
            lineHeight: zeplinTextStyle.lineHeight,
            alignment: zeplinTextStyle.textAlign,
            font,
            color
        });
    }

    static fromZeplinTextStyles(zeplinTextStyles, context) {
        return zeplinTextStyles.map(zeplinTextStyle => TextStyle.fromZeplinTextStyle(zeplinTextStyle, context));
    }
}
