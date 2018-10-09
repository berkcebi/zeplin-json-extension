const SPACE = 2;

function comment(context, text) {
    // Avoid comments as JSON doesn't support them.
    return "‣ " + text;
}

function styleguideColors(context, colors) {
    const colorRepresentation = context.getOption("colorRepresentation");
    const adjustedColors = colors.map(color => adjustedColor(color, colorRepresentation));

    return {
        code: JSON.stringify(adjustedColors, null, SPACE),
        language: "json"
    };
}

function styleguideTextStyles(context, textStyles) {
    const project = context.project;
    const colorRepresentation = context.getOption("colorRepresentation");
    const adjustedTextStyles = textStyles.map(textStyle => adjustedTextStyle(textStyle, project, colorRepresentation));

    return {
        code: JSON.stringify(adjustedTextStyles, null, SPACE),
        language: "json"
    };
}

function exportStyleguideColors(context, colors) {
    const colorsObject = styleguideColors(context, colors);
    colorsObject.filename = "colors.json";

    return colorsObject;
}

function exportStyleguideTextStyles(context, textStyles) {
    const textStylesObject = styleguideTextStyles(context, textStyles);
    textStylesObject.filename = "textStyles.json";

    return textStylesObject;
}

/**
 * Creates new color object with representation applied.
 * @param {Object} color Color object.
 * @param {String} representation Color representation option.
 * @returns {Object} New color object with representation applied.
 */
function adjustedColor(color, representation) {
    switch (representation) {
        case "rgba": {
            return {
                name: color.name,
                red: color.r,
                green: color.g,
                blue: color.b,
                alpha: color.a
            };
        }
        case "hex": {
            const hex = color.toHex();

            return {
                name: color.name,
                hex: hex.r + hex.g + hex.b,
                alpha: color.a
            };
        }
        default:
    }
}

/**
 * Creates text style object with color representation applied.
 * @param {Object} textStyle Text style object.
 * @param {Project} project Project object.
 * @param {String} colorRepresentation Color representation option.
 * @returns {Object} New text style object with color representation applied.
 */
function adjustedTextStyle(textStyle, project, colorRepresentation) {
    const textStyleObject = {
        name: textStyle.name,
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

    if (textStyle.color) {
        const color = project.findColorEqual(textStyle.color) || textStyle.color;
        textStyleObject.color = adjustedColor(color, colorRepresentation);
    }

    return textStyleObject;
}

export default {
    styleguideColors,
    styleguideTextStyles,
    exportStyleguideColors,
    exportStyleguideTextStyles,
    comment
};
