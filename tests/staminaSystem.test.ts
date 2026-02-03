import { describe, it, expect } from 'vitest';
import { StaminaSystem } from '../src/systems/staminaSystem';

describe('StaminaSystem', () => {
  it('allows an action when stamina is sufficient', () => {
    const stamina = new StaminaSystem(100, 50);
    expect(stamina.canPerformAction(30)).toBe(true);
  });

  it('blocks an action when stamina is insufficient', () => {
    const stamina = new StaminaSystem(100, 20);
    expect(stamina.canPerformAction(30)).toBe(false);
  });

  it('consumes stamina correctly', () => {
    const stamina = new StaminaSystem(100, 50);
    stamina.consume(20);
    expect(stamina.stamina).toBe(30);
  });

  it('throws an error when consuming more stamina than available', () => {
    const stamina = new StaminaSystem(100, 10);
    expect(() => stamina.consume(20)).toThrow();
  });

  it('regenerates stamina without exceeding max stamina', () => {
    const stamina = new StaminaSystem(100, 90);
    stamina.regenerate(50);
    expect(stamina.stamina).toBe(100);
  });
});