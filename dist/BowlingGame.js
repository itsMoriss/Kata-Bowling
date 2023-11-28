"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingGame = void 0;
// Define the BowlingGame class
class BowlingGame {
    constructor() {
        this.rolls = Array(21).fill(0); // Array to store roll results
        this.currentRoll = 0; // Index to track the current roll
    }
    // Method to calculate the total score
    score() {
        let score = 0;
        let frameIndex = 0;
        // Loop through 10 frames
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(frameIndex)) {
                // If a strike, add 10 plus the strike bonus
                score += 10 + this.strikeBonus(frameIndex);
                frameIndex++;
            }
            else if (this.isSpare(frameIndex)) {
                // If a spare, add 10 plus the spare bonus
                score += 10 + this.spareBonus(frameIndex);
                frameIndex += 2;
            }
            else {
                // If an open frame, add the sum of the rolls in the frame
                score += this.sumOfBallsInFrame(frameIndex);
                frameIndex += 2;
            }
        }
        return score;
    }
    // Private method: Calculate the sum of rolls in a frame
    sumOfBallsInFrame(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
    }
    // Private method: Get the bonus for a strike
    strikeBonus(frameIndex) {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    }
    // Private method: Get the bonus for a spare
    spareBonus(frameIndex) {
        return this.rolls[frameIndex + 2];
    }
    // Private method: Check if a frame is a strike
    isStrike(frameIndex) {
        return this.rolls[frameIndex] === 10;
    }
    // Private method: Check if a frame is a spare
    isSpare(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }
    // Public method: Record a roll
    roll(pins) {
        this.rolls[this.currentRoll++] = pins;
    }
}
exports.BowlingGame = BowlingGame;
