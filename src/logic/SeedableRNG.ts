class SeedableRNG {
    state: number;
    
    constructor(seed: number) {
        this.state = seed;
    }

    next(): number {
        // XORShift32 from https://en.wikipedia.org/wiki/Xorshift
        let x: number = this.state;
        x ^= x << 13;
        x ^= x >> 17;
        x ^= x << 5;
        this.state = x;
        return x >>> 0; // Return the number unsigned.
    }
}

export { SeedableRNG }