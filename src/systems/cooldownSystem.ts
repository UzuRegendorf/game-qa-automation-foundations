export class CooldownSystem {
  private lastUsedAt: number | null = null;

  constructor(private readonly cooldownMs: number) {
    if (cooldownMs < 0) {
      throw new Error('Cooldown duration cannot be negative');
    }
  }

  canUse(currentTimeMs: number): boolean {
    if (this.lastUsedAt === null) {
      return true;
    }

    return currentTimeMs - this.lastUsedAt >= this.cooldownMs;
  }

  use(currentTimeMs: number): void {
    if (!this.canUse(currentTimeMs)) {
      throw new Error('Ability is on cooldown');
    }

    this.lastUsedAt = currentTimeMs;
  }
}
