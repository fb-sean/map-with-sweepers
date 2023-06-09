export class AbstractMap<K, V> extends Map<string, V> {
    constructor(options: Options | null) {
        super();

        setInterval(() => {
            for (const [key, value] of this) {
                if(options?.sweepFilter) {
                    if (options.sweepFilter(key, value)) {
                        this.delete(key);
                    }
                } else {
                    this.delete(key);
                }
            }
        }, options?.sweepInterval ?? 5 * 60 * 1000);
    }

    toArray() {
        return Array.from(this.entries());
    }

    override toString() {
        return this.toArray().join(', ');
    }
}

