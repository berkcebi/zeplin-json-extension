import Color from "./model/color";
import TextStyle from "./model/textStyle";
import CodeObject from "./model/codeObject";
import CodeExportObject from "./model/codeExportObject";

const COLORS_FILENAME = "colors.json";
const TEXT_STYLES_FILENAME = "textStyles.json";

function colors(context) {
    const containerKey = "project" in context ? "project" : "styleguide";
    const container = context[containerKey];

    let zeplinColors;
    if (context.getOption("includeReferencedStyleguides")) {
        zeplinColors = getContainerReferencedObjects(container, "colors");
    } else {
        zeplinColors = container.colors;
    }

    const extensionColors = Color.fromZeplinColors(zeplinColors, context);

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
    const containerKey = "project" in context ? "project" : "styleguide";
    const container = context[containerKey];

    let zeplinTextStyles;
    if (context.getOption("includeReferencedStyleguides")) {
        zeplinTextStyles = getContainerReferencedObjects(container, "textStyles");
    } else {
        zeplinTextStyles = container.textStyles;
    }

    const extensionTextStyles = TextStyle.fromZeplinTextStyles(zeplinTextStyles, context);

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

function getContainerReferencedObjects(container, key) {
    const containerObjects = container[key];

    const referencedStyleguide = container.linkedStyleguide || container.parent;
    if (!referencedStyleguide) {
        return containerObjects;
    }

    return containerObjects.concat(getContainerReferencedObjects(referencedStyleguide, key));
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
