import Color from "./model/color";
import TextStyle from "./model/textStyle";
import CodeObject from "./model/codeObject";
import CodeExportObject from "./model/codeExportObject";

const COLORS_FILENAME = "colors.json";
const TEXT_STYLES_FILENAME = "textStyles.json";

function colors(context) {
    const containerType = "project" in context ? "project" : "styleguide";
    const container = context[containerType];
    const extensionColors = Color.fromZeplinColors(container.colors, context);

    return CodeObject.fromJSONObject(extensionColors);
}

// TODO: Remove after 2020/01/01.
function styleguideColors(context, zeplinColors) {
    const extensionColors = Color.fromZeplinColors(zeplinColors, context);

    return CodeObject.fromJSONObject(extensionColors);
}

function exportColors(context) {
    const colorsCodeObject = colors(context);

    return CodeExportObject.fromCodeObject(colorsCodeObject, COLORS_FILENAME);
}

// TODO: Remove after 2020/01/01.
function exportStyleguideColors(context, zeplinColors) {
    const colorsCodeObject = styleguideColors(context, zeplinColors);

    return CodeExportObject.fromCodeObject(colorsCodeObject, COLORS_FILENAME);
}

function textStyles(context) {
    const containerType = "project" in context ? "project" : "styleguide";
    const container = context[containerType];
    const extensionTextStyles = TextStyle.fromZeplinTextStyles(container.textStyles, context);

    return CodeObject.fromJSONObject(extensionTextStyles);
}

// TODO: Remove after 2020/01/01.
function styleguideTextStyles(context, zeplinTextStyles) {
    const extensionTextStyles = TextStyle.fromZeplinTextStyles(zeplinTextStyles, context);

    return CodeObject.fromJSONObject(extensionTextStyles);
}

function exportTextStyles(context) {
    const textStylesCodeObject = textStyles(context);

    return CodeExportObject.fromCodeObject(textStylesCodeObject, TEXT_STYLES_FILENAME);
}

// TODO: Remove after 2020/01/01.
function exportStyleguideTextStyles(context, zeplinTextStyles) {
    const textStylesCodeObject = styleguideTextStyles(context, zeplinTextStyles);

    return CodeExportObject.fromCodeObject(textStylesCodeObject, TEXT_STYLES_FILENAME);
}

// TODO: Remove after 2020/01/01.
function comment(_, text) {
    // Avoid comments as JSON doesn't support them.
    return "‣ " + text;
}

export default {
    colors,
    styleguideColors,
    exportColors,
    exportStyleguideColors,
    textStyles,
    styleguideTextStyles,
    exportTextStyles,
    exportStyleguideTextStyles,
    comment
};
