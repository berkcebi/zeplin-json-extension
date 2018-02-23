function comment(context, text) {
    // Avoid comments as JSON doesn't support them.
    return "‣ " + text;
}

function styleguideColors(context, colors) {
    return {
        "code": JSON.stringify(colors, null, 2),
        "language": "json"
    };
}

function styleguideTextStyles(context, textStyles) {
    return {
        "code": JSON.stringify(textStyles, null, 2),
        "language": "json"
    };
}
