import { describe, it, expect } from 'vitest';
import { LootDropSystem } from '../src/systems/rngSystem';
import { FixedRandom } from '../src/utils/random';

describe('LootDropSystem', () => {
  it('drops loot when roll is within drop chance', () => {
    const rng = new FixedRandom(0.2);
    const lootSystem = new LootDropSystem(rng);

    expect(lootSystem.rollDrop(0.3)).toBe(true);
  });

  it('does not drop loot when roll exceeds drop chance', () => {
    const rng = new FixedRandom(0.8);
    const lootSystem = new LootDropSystem(rng);

    expect(lootSystem.rollDrop(0.3)).toBe(false);
  });

  it('drops loot when roll equals drop chance boundary', () => {
    const rng = new FixedRandom(0.5);
    const lootSystem = new LootDropSystem(rng);

    expect(lootSystem.rollDrop(0.5)).toBe(true);
  });

  it('throws error for invalid drop chance', () => {
    const rng = new FixedRandom(0.5);
    const lootSystem = new LootDropSystem(rng);

    expect(() => lootSystem.rollDrop(1.5)).toThrow();
  });
});
