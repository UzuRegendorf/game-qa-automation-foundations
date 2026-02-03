import { describe, it, expect } from 'vitest';
import { CooldownSystem } from '../src/systems/cooldownSystem';

describe('CooldownSystem', () => {
  it('allows first use immediately', () => {
    const cooldown = new CooldownSystem(1000);
    expect(cooldown.canUse(0)).toBe(true);
  });

  it('blocks usage during cooldown', () => {
    const cooldown = new CooldownSystem(1000);
    cooldown.use(0);

    expect(cooldown.canUse(500)).toBe(false);
  });

  it('allows usage after cooldown expires', () => {
    const cooldown = new CooldownSystem(1000);
    cooldown.use(0);

    expect(cooldown.canUse(1000)).toBe(true);
  });

  it('throws an error if used before cooldown expires', () => {
    const cooldown = new CooldownSystem(1000);
    cooldown.use(0);

    expect(() => cooldown.use(500)).toThrow();
  });

  it('does not throw when used exactly at cooldown boundary', () => {
    const cooldown = new CooldownSystem(1000);
    cooldown.use(0);

    expect(() => cooldown.use(1000)).not.toThrow();
  });
});
