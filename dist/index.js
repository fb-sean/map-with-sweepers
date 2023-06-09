"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMap = void 0;
class AbstractMap extends Map {
    constructor(options) {
        super();
        setInterval(() => {
            for (const [key, value] of this) {
                if (options?.sweepFilter) {
                    if (options.sweepFilter(key, value)) {
                        this.delete(key);
                    }
                }
                else {
                    this.delete(key);
                }
            }
        }, options?.sweepInterval ?? 5 * 60 * 1000);
    }
    toArray() {
        return Array.from(this.entries());
    }
    toString() {
        return this.toArray().join(', ');
    }
}
exports.AbstractMap = AbstractMap;
