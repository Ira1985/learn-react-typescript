import Url from "./AddedModels/Url";
import Image from "./AddedModels/Image";
import List from "./AddedModels/List";
import Comic from "./AddedModels/Comic";
import Story from "./AddedModels/Story";
import Event from "./AddedModels/Event";
import Serie from "./AddedModels/Serie";

class Character {
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get modified(): string {
        return this._modified;
    }

    set modified(value: string) {
        this._modified = value;
    }

    get resourceURI(): string {
        return this._resourceURI;
    }

    set resourceURI(value: string) {
        this._resourceURI = value;
    }

    get urls(): Url[] {
        return this._urls;
    }

    set urls(value: Url[]) {
        this._urls = value;
    }

    get thumbnail(): Image {
        return this._thumbnail;
    }

    set thumbnail(value: Image) {
        this._thumbnail = value;
    }

    get comics(): List<Comic> {
        return this._comics;
    }

    set comics(value: List<Comic>) {
        this._comics = value;
    }

    get stories(): List<Story> {
        return this._stories;
    }

    set stories(value: List<Story>) {
        this._stories = value;
    }

    get events(): List<Event> {
        return this._events;
    }

    set events(value: List<Event>) {
        this._events = value;
    }

    get series(): List<Serie> {
        return this._series;
    }

    set series(value: List<Serie>) {
        this._series = value;
    }
    constructor(
        private _id: number,
        private _name: string,
        private _description: string,
        private _modified: string,
        private _resourceURI: string,
        private _urls: Url[],
        private _thumbnail: Image,
        private _comics: List<Comic>,
        private _stories: List<Story>,
        private _events: List<Event>,
        private _series: List<Serie>
    ) {}
}

export default Character