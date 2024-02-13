const robot = require('robotjs');

// Set up the keyboard event listeners
robot.setKeyboardDelay(10);

// Keydown event
robot.keyToggle('a', 'down');

// Some delay (adjust as needed)
robot.setKeyboardDelay(100);

// Keyup event
robot.keyToggle('a', 'up');
