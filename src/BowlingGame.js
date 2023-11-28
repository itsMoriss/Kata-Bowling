"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingGame = void 0;
var BowlingGame = /** @class */ (function () {
    function BowlingGame() {
        this.rolls = [];
    }
    BowlingGame.prototype.roll = function (pins) {
        this.rolls.push(pins);
    };
    BowlingGame.prototype.score = function () {
        var totalScore = 0;
        var rollIndex = 0;
        for (var frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) {
                // Strike: add 10 plus the next two rolls
                totalScore += 10 + this.strikeBonus(rollIndex);
                rollIndex += 1;
            }
            else if (this.isSpare(rollIndex)) {
                // Spare: add 10 plus the next roll
                totalScore += 10 + this.spareBonus(rollIndex);
                rollIndex += 2;
            }
            else {
                // Open frame: add the total number of pins knocked down in two rolls
                totalScore += this.sumOfRolls(rollIndex);
                rollIndex += 2;
            }
        }
        return totalScore;
    };
    BowlingGame.prototype.isStrike = function (rollIndex) {
        return this.rolls[rollIndex] === 10;
    };
    BowlingGame.prototype.isSpare = function (rollIndex) {
        return this.sumOfRolls(rollIndex) === 10;
    };
    BowlingGame.prototype.strikeBonus = function (rollIndex) {
        return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    };
    BowlingGame.prototype.spareBonus = function (rollIndex) {
        return this.rolls[rollIndex + 2];
    };
    BowlingGame.prototype.sumOfRolls = function (rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    };
    // Simple test
    BowlingGame.prototype.runTest = function () {
        // Simulate some rolls
        this.roll(3);
        this.roll(5);
        // ... simulate more rolls ...
        // Get and log the score
        var totalScore = this.score();
        console.log("Total Score: ".concat(totalScore));
    };
    return BowlingGame;
}());
exports.BowlingGame = BowlingGame;
// Create an instance of the BowlingGame class
var game = new BowlingGame();
// Run the simple test
game.runTest();
