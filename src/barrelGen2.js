#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const directoryPath = process.argv[2];


function scanDirectory(directory) {
  const result = {};

  function scan(dir, depth) {
    const contents = fs.readdirSync(dir);

    result[depth] = { dirs: [], files: [] };

    contents.forEach((item) => {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        result[depth].dirs.push(item);
        scan(itemPath, depth + 1);
      } else if (stats.isFile()) {
        result[depth].files.push(item);
      }
    });
  }

  scan(directory, 0);
  return result;
}

// Caminho do diretório que 

const directoryStructure = scanDirectory(directoryPath);
console.log(directoryStructure);
