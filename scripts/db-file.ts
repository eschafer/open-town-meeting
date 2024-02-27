import dotenv from 'dotenv';
import { exec } from 'child_process';

if (!process.env.npm_lifecycle_event) {
  // Make sure this script isn't used elsewhere since it's susceptible to command injection
  console.error(
    'This script should only be run from a package.json script to prevent command injection attacks.',
  );
  process.exit(1);
}

dotenv.config();

const command = `wrangler d1 execute ${process.env.DATABASE_NAME} --local --file "${process.argv[2]}"`;

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
