import dotenv from 'dotenv';
import { exec } from 'child_process';
import arg from 'arg';
import readline from 'readline';

dotenv.config();

if (!process.env.npm_lifecycle_event) {
  // Make sure this script isn't used elsewhere since it's susceptible to command injection
  console.error(
    'This script should only be run from a package.json script to prevent command injection attacks.',
  );
  process.exit(1);
}

const argSpec = {
  '--location': String,
  '--command': String,
};

const args = arg(argSpec);

// get the env and command values
const inputLocation = args['--location'] || 'local'; // can be 'local' or 'remote'
const inputCommand = args['--command'];

if (inputLocation === 'remote') {
  // Create a readline interface
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Ask for confirmation
  rl.question(
    '⚠️ WARNING: Are you sure you want to run this command on the remote database? This will affect the production database.\nType "yes" to continue:\n',
    (answer) => {
      if (answer === 'yes') {
        runCommand({ location: inputLocation, command: inputCommand });
      } else {
        console.log('Command not confirmed. Exiting.');
        process.exit(0);
      }

      rl.close();
    },
  );
} else if (inputLocation === 'local') {
  runCommand({ location: inputLocation, command: inputCommand });
} else {
  console.error('Invalid location. Use "local" or "remote".');
  process.exit(1);
}

function runCommand(params) {
  const command = `wrangler d1 execute ${process.env.DATABASE_NAME} ${params.location === 'remote' ? '' : '--local'} --command "${params.command}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    // Remove the non-JSON content at the beginning of the string
    const jsonStart = stdout.indexOf('[');
    const jsonEnd = stdout.lastIndexOf(']') + 1; // Include the closing bracket
    const jsonString = stdout.slice(jsonStart, jsonEnd);

    // Parse the JSON string into an array
    const data = JSON.parse(jsonString);

    console.table(data[0].results);
  });
}
