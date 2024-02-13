const ioHook = require('iohook');

ioHook.on('keydown', event => {
  console.log('Keydown:', event);
});

ioHook.on('keyup', event => {
  console.log('Keyup:', event);
});

// Start the hook
ioHook.start();

// Register a callback on process exit to ensure the hook is properly stopped
process.on('exit', () => {
  ioHook.stop();
  console.log('Keyboard hook stopped.');
});

// Handle SIGINT (Ctrl+C) to exit gracefully
process.on('SIGINT', () => {
  process.exit();
});
