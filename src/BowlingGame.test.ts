// Import the BowlingGame class from the BowlingGame module
import { BowlingGame } from './BowlingGame';

// Declare a variable to hold an instance of BowlingGame
let g: BowlingGame = new BowlingGame();

// Reset the instance before each test to ensure a clean state
beforeEach(() => {
  g = new BowlingGame();
});

// Describe the test suite for the BowlingGame class
describe('Bowling game', () => {
  // Test case: Should score 0 for a gutter game
  test('should score 0 for gutter game', () => {
    rollMany(20, 0); // Roll 20 times with 0 pins
    expect(g.score()).toBe(0); // Expect the score to be 0
  });

  // Test case: Should score 20 for all ones game
  test('should score 20 for all ones game', () => {
    rollMany(20, 1); // Roll 20 times with 1 pin each time
    expect(g.score()).toBe(20); // Expect the score to be 20
  });

  // Test case: Should score 16 for a spare followed by a 3 ball
  test('should score 16 for a spare followed by a 3 ball', () => {
    rollSpare(); // Roll a spare
    g.roll(3); // Roll a 3
    expect(g.score()).toBe(16); // Expect the score to be 16
  });

  // Test case: Should score 24 for a strike followed by a 3 and a 4 ball
  test('should score 24 for a strike followed by a 3 and a 4 ball', () => {
    rollStrike(); // Roll a strike
    g.roll(3); // Roll a 3
    g.roll(4); // Roll a 4
    rollMany(16, 0); // Roll 16 times with 0 pins
    expect(g.score()).toBe(24); // Expect the score to be 24
  });

  // Test case: Should score 300 for a perfect game
  test('should score 300 for a perfect game', () => {
    rollMany(12, 10); // Roll 12 strikes (perfect game)
    expect(g.score()).toBe(300); // Expect the score to be 300
  });

  // Simulate different game scenarios in the test cases
  
  // Helper function: Roll a strike
  function rollStrike(): void {
    g.roll(10);
  }

  // Helper function: Roll a spare
  function rollSpare(): void {
    g.roll(5);
    g.roll(5);
  }

  // Helper function: Roll a certain number of pins for a certain number of rolls
  function rollMany(n: number, pins: number): void {
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  }
});