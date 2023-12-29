import $ from "../platform/$";

export default class SimpleDict<T> {
  keys: string[]

  constructor() {
    this.keys = [];
  }

  push(key, data: T) {
    key = `${key}`;
    if (!this[key]) { this.keys.push(key); }
    this[key] = data;
  }

  /**
   * Inserts at the right place. Assumes the keys are numeric and already sorted ascending.
   * @returns The index where the item was inserted.
   */
  insert(key: number, data: T): number;
  /**
   * Inserts at the right place. Assumes the keys are already sorted ascending.
   * @param compare A function to compare the keys. Should return true if the given key is bigger than the one compared
   * to, and false otherwise. Defaults to a numeric comparison.
   * @returns The index where the item was inserted.
   */
  insert(key: string | number, data: T, compare: (lastKey: string, key: string | number) => boolean): number;
  insert(key: string | number, data: T, compare = (lastKey: string, key: string | number) => (+lastKey) < (+key)): number {
    const length = this.keys.length
    if (this[key] || !length || compare(this.lastKey(), key)) {
      this.push(key, data);
      return length;
    }
    let indexOfNext = this.keys.findIndex(k => !compare(k, key));
    if (indexOfNext === -1) {
      this.push(key, data);
    } else {
      this[key] = data;
      this.keys.splice(indexOfNext, 0, key.toString());
    }
    return indexOfNext;
  }

  insertAt(key: string, index: number, data: T) {
    this[key] = data;
    this.keys.splice(index, 0, key);
  }

  rm(key) {
    let i;
    key = `${key}`;
    if ((i = this.keys.indexOf(key)) !== -1) {
      this.keys.splice(i, 1);
      delete this[key];
    }
  }

  forEach(fn) {
    for (var key of this.keys) { fn(this[key]); }
  }

  get(key): T {
    if (key === 'keys') {
      return undefined;
    } else {
      return $.getOwn(this, key);
    }
  }

  lastKey(): string {
    return this.keys[this.keys.length - 1];
  }

  last(): T {
    return this.keys.length ? this[this.keys.length - 1] : undefined;
  }
}
