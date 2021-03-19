class Movie {
    constructor(
        private _poster_path: string,
        private _adult: boolean,
        private _overview: string,
        private _release_date: string,
        private _genre_ids: number[],
        private _id: number,
        private _original_title: string,
        private _original_language: string,
        private _title: string,
        private _backdrop_path: string | null,
        private _popularity: number,
        private _vote_count: number,
        private _video: boolean,
        private _vote_average: number
    ) {}

    get poster_path(): string {
        return this._poster_path;
    }

    set poster_path(value: string) {
        this._poster_path = value;
    }

    get adult(): boolean {
        return this._adult;
    }

    set adult(value: boolean) {
        this._adult = value;
    }

    get overview(): string {
        return this._overview;
    }

    set overview(value: string) {
        this._overview = value;
    }

    get release_date(): string {
        return this._release_date;
    }

    set release_date(value: string) {
        this._release_date = value;
    }

    get genre_ids(): number[] {
        return this._genre_ids;
    }

    set genre_ids(value: number[]) {
        this._genre_ids = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get original_title(): string {
        return this._original_title;
    }

    set original_title(value: string) {
        this._original_title = value;
    }

    get original_language(): string {
        return this._original_language;
    }

    set original_language(value: string) {
        this._original_language = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get backdrop_path(): string | null {
        return this._backdrop_path;
    }

    set backdrop_path(value: string | null) {
        this._backdrop_path = value;
    }

    get popularity(): number {
        return this._popularity;
    }

    set popularity(value: number) {
        this._popularity = value;
    }

    get vote_count(): number {
        return this._vote_count;
    }

    set vote_count(value: number) {
        this._vote_count = value;
    }

    get video(): boolean {
        return this._video;
    }

    set video(value: boolean) {
        this._video = value;
    }

    get vote_average(): number {
        return this._vote_average;
    }

    set vote_average(value: number) {
        this._vote_average = value;
    }
}

export default Movie;