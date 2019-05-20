export default class CodeExportObject {
    constructor({
        code,
        language,
        filename
    }) {
        Object.assign(this, {
            code,
            language,
            filename
        });
    }

    static fromCodeObject(codeObject, filename) {
        return new CodeExportObject({
            code: codeObject.code,
            language: codeObject.language,
            filename
        });
    }
}
