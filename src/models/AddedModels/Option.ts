class Option {
    constructor(
        private _label: string,
        private _value: string
    ) {}

    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }
}

export default Option