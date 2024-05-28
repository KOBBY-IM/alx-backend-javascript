import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n');
    const fields = {};

    for (const line of lines.slice(1)) {
      if (line.trim()) {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
