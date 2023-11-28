// Define the BowlingGame class
export class BowlingGame {
  private rolls: number[] = Array(21).fill(0); // Array to store roll results
  private currentRoll: number = 0; // Index to track the current roll

  // Method to calculate the total score
  score(): number {
    let score = 0;
    let frameIndex = 0;

    // Loop through 10 frames
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        // If a strike, add 10 plus the strike bonus
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        // If a spare, add 10 plus the spare bonus
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        // If an open frame, add the sum of the rolls in the frame
        score += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }

  // Private method: Calculate the sum of rolls in a frame
  private sumOfBallsInFrame(frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  // Private method: Get the bonus for a strike
  private strikeBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  // Private method: Get the bonus for a spare
  private spareBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 2];
  }

  // Private method: Check if a frame is a strike
  private isStrike(frameIndex: number): boolean {
    return this.rolls[frameIndex] === 10;
  }

  // Private method: Check if a frame is a spare
  private isSpare(frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }

  // Public method: Record a roll
  // Recording the number of pins knocked down in each roll. It updates the rolls array and increments the currentRoll counter.
  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }
} 