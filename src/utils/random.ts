export interface RandomGenerator {
  next(): number;
}

export class FixedRandom implements RandomGenerator {
  constructor(private readonly value: number) {
    if (value < 0 || value > 1) {
      throw new Error('Random value must be between 0 and 1');
    }
  }

  next(): number {
    return this.value;
  }
}