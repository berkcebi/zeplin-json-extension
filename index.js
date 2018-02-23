var SPACE = 2;

function comment(context, text) {
    // Avoid comments as JSON doesn't support them.
    return "‣ " + text;
}

function styleguideColors(context, colors) {
    var colorRepresentation = context.getOption("colorRepresentation");
    var adjustedColors = colors.map(function(color) {
        return adjustedColor(color, colorRepresentation);
    });

    return {
        code: JSON.stringify(adjustedColors, null, SPACE),
        language: "json"
    };
}

function styleguideTextStyles(context, textStyles) {
    var colorRepresentation = context.getOption("colorRepresentation");
    var adjustedTextStyles = textStyles.map(function(textStyle) {
        return adjustedTextStyle(textStyle, colorRepresentation);
    });

    return {
        code: JSON.stringify(adjustedTextStyles, null, SPACE),
        language: "json"
    };
}

function exportStyleguideColors(context, colors) {
    var colors = styleguideColors(context, colors);
    colors.filename = "colors.json";

    return colors;
}

function exportStyleguideTextStyles(context, textStyles) {
    var textStyles = styleguideTextStyles(context, textStyles);
    textStyles.filename = "textStyles.json";

    return textStyles;
}

/** Returns a new color object with representation applied. */
function adjustedColor(color, representation) {
    switch (representation) {
        case "rgba":
            return {
                name: color.name,
                red: color.r,
                green: color.g,
                blue: color.b,
                alpha: color.a
            };
        case "hex":
            var hex = color.toHex();

            return {
                name: color.name,
                hex: hex.r + hex.g + hex.b,
                alpha: color.a
            };
    }
}

/** Returns a new text style object with color representation applied. */
function adjustedTextStyle(textStyle, colorRepresentation) {
    return {
        name: textStyle.name,
        color: adjustedColor(textStyle.color, colorRepresentation),
        letterSpacing: textStyle.letterSpacing,
        lineHeight: textStyle.lineHeight,
        alignment: textStyle.textAlign,
        font: {
            postscriptName: textStyle.fontFace,
            family: textStyle.fontFamily,
            size: textStyle.fontSize,
            weight: textStyle.weightText,
            stretch: textStyle.fontStretch
        }
    };
}
