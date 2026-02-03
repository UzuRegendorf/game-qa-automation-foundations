export class StaminaSystem {
  private currentStamina: number;

  constructor(
    private readonly maxStamina: number,
    initialStamina: number
  ) {
    if (maxStamina <= 0) {
      throw new Error('Max stamina must be greater than zero');
    }

    if (initialStamina < 0 || initialStamina > maxStamina) {
      throw new Error('Initial stamina must be between 0 and max stamina');
    }

    this.currentStamina = initialStamina;
  }

  canPerformAction(cost: number): boolean {
    if (cost < 0) {
      throw new Error('Action cost cannot be negative');
    }

    return this.currentStamina >= cost;
  }

  consume(cost: number): void {
    if (!this.canPerformAction(cost)) {
      throw new Error('Not enough stamina');
    }

    this.currentStamina -= cost;
  }

  regenerate(amount: number): void {
    if (amount < 0) {
      throw new Error('Regeneration amount cannot be negative');
    }

    this.currentStamina = Math.min(
      this.currentStamina + amount,
      this.maxStamina
    );
  }

  get stamina(): number {
    return this.currentStamina;
  }
}
