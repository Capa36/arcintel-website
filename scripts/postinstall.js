import { platform } from 'os';
import { exec } from 'child_process';

const isWindows = platform() === 'win32';

if (!isWindows) {
  // Only run chmod on Unix-like systems
  exec('chmod -R 755 node_modules', (error) => {
    if (error) {
      console.error('Error setting permissions:', error);
      process.exit(1);
    }
  });
} else {
  // On Windows, we don't need to modify permissions
  console.log('Skipping permission modification on Windows');
} 