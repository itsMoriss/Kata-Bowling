// import { BowlingGame } from './BowlingGame';
const {BowlingGame} = require('.src/BowlingGame');

describe('BowlingGame', () => {
  it('should calculate score for a gutter game', () => {
    // Arrange - Setup phase. We create an instance of the BowlingGame class

    const game = new BowlingGame();

    // Act - Exercise. We simulate a gutter game by rolling 0 pins in each of the 20 rolls

    for (let i = 0; i < 20; i++) {
      game.roll(0); // Knock down 0 pins in each roll (gutter game)
    }

    // Assert - Verify. We use Jest's expect fn to check if the actual result of game.score() matches the expected result

    expect(game.score()).toBe(0); // The total score for a gutter game should be 0
  });

  it('should calculate score for a game of all ones', () => {
    // Arrange

    const game = new BowlingGame();

    // Act

    for (let i = 0; i < 20; i++) {
      game.roll(1); // Knock down 1 pin in each roll
    }

    // Assert

    expect(game.score()).toBe(20); // The total score for a game of all ones should be 20
  });

  it('should calculate score for a spare followed by 3 pins', () => {
    // Arrange

    const game = new BowlingGame();

    // Act

    game.roll(5);
    game.roll(5); // Spare (knocking down 5 pins in two rolls)
    game.roll(3); // Knock down 3 pins in the next roll

    // Assert

    expect(game.score()).toBe(16); // The total score for a spare followed by 3 pins should be 16
  });

  it('should calculate score for a strike followed by 3 and 4 pins', () => {
    // Arrange

    const game = new BowlingGame();

    // Act

    game.roll(10); // Strike (knocking down all pins in one roll)
    game.roll(3);  // Knock down 3 pins in the next roll
    game.roll(4);  // Knock down 4 pins in the roll after that

    // Assert

    expect(game.score()).toBe(24); // The total score for a strike followed by 3 and 4 pins should be 24
  });

  it('should calculate score for a perfect game (all strikes)', () => {
    // Arrange

    const game = new BowlingGame();

    // Act

    for (let i = 0; i < 12; i++) {
      game.roll(10); // Twelve strikes (a perfect game)
    }

    // Assert

    expect(game.score()).toBe(300); // The total score for a perfect game should be 300
  });
});
