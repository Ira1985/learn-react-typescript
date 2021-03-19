class Image {
    constructor(
        private _extension: string,
        private _path: string,
    ) {}

    get extension(): string {
        return this._extension;
    }

    set extension(value: string) {
        this._extension = value;
    }

    get path(): string {
        return this._path;
    }

    set path(value: string) {
        this._path = value;
    }
}

export default Image