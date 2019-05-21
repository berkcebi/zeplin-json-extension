const JSON_STRINGIFY_SPACE = 2;

export default class CodeObject {
    constructor({
        code,
        language
    }) {
        Object.assign(this, {
            code,
            language
        });
    }

    static fromJSONObject(object) {
        return new CodeObject({
            code: JSON.stringify(object, null, JSON_STRINGIFY_SPACE),
            language: "json"
        });
    }
}
