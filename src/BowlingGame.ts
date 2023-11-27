export class BowlingGame {
  private rolls: number[] = [];

  roll(pins: number): void {
    this.rolls.push(pins);
  }

  score(): number {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollIndex)) {
        // Strike: add 10 plus the next two rolls
        totalScore += 10 + this.strikeBonus(rollIndex);
        rollIndex += 1;
      } else if (this.isSpare(rollIndex)) {
        // Spare: add 10 plus the next roll
        totalScore += 10 + this.spareBonus(rollIndex);
        rollIndex += 2;
      } else {
        // Open frame: add the total number of pins knocked down in two rolls
        totalScore += this.sumOfRolls(rollIndex);
        rollIndex += 2;
      }
    }

    return totalScore;
  }

  private isStrike(rollIndex: number): boolean {
    return this.rolls[rollIndex] === 10;
  }

  private isSpare(rollIndex: number): boolean {
    return this.sumOfRolls(rollIndex) === 10;
  }

  private strikeBonus(rollIndex: number): number {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  private spareBonus(rollIndex: number): number {
    return this.rolls[rollIndex + 2];
  }

  private sumOfRolls(rollIndex: number): number {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

  // Simple test
  runTest(): void {
    // Simulate some rolls
    this.roll(3);
    this.roll(5);
    // ... simulate more rolls ...

    // Get and log the score
    const totalScore = this.score();
    console.log(`Total Score: ${totalScore}`);
  }
}

// Create an instance of the BowlingGame class
const game = new BowlingGame();

// Run the simple test
game.runTest();

  