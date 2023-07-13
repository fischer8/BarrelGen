#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const directoryFolder = process.argv[2];

function listDirectoryFiles(directory) {
  const files = [];
  fs.readdirSync(directory).forEach((file_name) => {
    const file_path = path.join(directory, file_name);
    if (
      fs.statSync(file_path).isFile() &&
      (file_name.endsWith('.js') || file_name.endsWith('.jsx')) &&
      !file_name.startsWith('index')
    ) {
      files.push(file_name);
    }
  });
  return files;
}

const files = [];
const directories = [];

function generateAutoImport(names, output_file_path) {
  const arquivo = fs.createWriteStream(output_file_path);
  names.forEach((name) => {
    directories.push(output_file_path.split('/')[output_file_path.split('/').length - 2]);
    const name_without_extension = path.parse(name).name;
    files.push(name_without_extension);
    arquivo.write(`import ${name_without_extension} from './${name_without_extension}';\n`);
  });
  arquivo.write('\nexport {\n');
  names.forEach((name) => {
    const name_without_extension = path.parse(name).name;
    arquivo.write(`  ${name_without_extension},\n`);
  });
  arquivo.write('};\n');
  arquivo.end();
}

function traverseCurrentDirectory(directory) {
  const fileNames = listDirectoryFiles(directory);
  const outputFileName = 'index.js';
  const outputFilePath = path.join(directory, outputFileName);
  generateAutoImport(fileNames, outputFilePath);

  fs.readdirSync(directory).forEach((sub_directory_name) => {
    const sub_directory_path = path.join(directory, sub_directory_name);
    if (fs.statSync(sub_directory_path).isDirectory()) {
      traverseCurrentDirectory(sub_directory_path);
    }
  });
}

function generateRootIndex(output_file_path) {
  const imports = {};
  const file = fs.createWriteStream(output_file_path);
  files.forEach((name, index) => {
    const directory = directories[index];
    const name_without_extension = path.parse(name).name;
    imports[directory] = imports[directory] || [];
    imports[directory].push(name_without_extension);
  });

  const sortedImports = Object.fromEntries(Object.entries(imports).sort());

  const bigImports = []
  for (const [directory, components] of Object.entries(sortedImports)) {
    const sortedComponents = components.sort();
    let importLine = '';
    if(sortedComponents.length > 1){
      bigImports.push(`\nimport { \n  ${sortedComponents.join(',\n  ')}\n} from './${directory}';\n`);
    } else {
      importLine = `import { ${sortedComponents.join(', ')} } from './${directory}';\n`;
    }
    file.write(importLine);
  }
  const bigSorted = bigImports.sort((imp) => imp.length - imp.length);
  bigSorted.forEach((bigImport) => {
    file.write(bigImport)
  })

  file.write('\nexport {\n');
  const sortedFiles = files.sort();
  sortedFiles.forEach((component) => {
    const componentWithoutExtension = path.parse(component).name;
    file.write(`  ${componentWithoutExtension},\n`);
  });
  file.write('};\n');
  file.end();
}

const outputFilePath = path.join(directoryFolder, 'index.js');

traverseCurrentDirectory(directoryFolder);
generateRootIndex(outputFilePath);

console.log('Files generated successfully.');
