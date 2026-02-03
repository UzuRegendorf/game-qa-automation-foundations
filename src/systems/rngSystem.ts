import { RandomGenerator } from '../utils/random';

export class LootDropSystem {
  constructor(private readonly rng: RandomGenerator) {}

  rollDrop(dropChance: number): boolean {
    if (dropChance < 0 || dropChance > 1) {
      throw new Error('Drop chance must be between 0 and 1');
    }

    return this.rng.next() <= dropChance;
  }
}
