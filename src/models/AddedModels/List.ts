class List<T> {
    constructor(
        private available: number,
        private returned: number,
        private collectionURI: string,
        private items: T[]
    ) {}
}

export default List