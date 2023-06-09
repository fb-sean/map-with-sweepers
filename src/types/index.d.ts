interface Options {
    sweepInterval: number;
    sweepFilter: (key: string, value: V) => boolean;
}

interface AbstractMap<K, V> extends Map<K, V> {
    constructor: Options;
}
