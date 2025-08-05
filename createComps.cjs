const fs = require('fs');
const path = require('path');

const getDir = (args) => {
  const root = './app';

  let directory = root;
  const dirIdx = args.indexOf('-d');
  let newFolder = 'folder';

  if (dirIdx !== -1 && dirIdx + 1 < args.length) {
    directory = root + args[dirIdx + 1];
    newFolder = args[dirIdx + 2];
  } else {
    console.log('missing directory');
    process.exit(1);
  }

  return { directory, newFolder };
};

const getFileNames = (args) => {
  const filesIdx = args.indexOf('-f');

  if (filesIdx !== -1 && filesIdx + 1 < args.length) {
    let fileNames = args.slice(filesIdx + 1, args.length);
    console.log('Files to create: \n', fileNames.join('\n'));
    return { fileNames };
  } else {
    console.log('missing file names');
    process.exit(1);
  }
};

const createFolder = (folderName, directory) => {
  const folderPath = path.join(directory, folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log('✅ Created section folder: ', folderPath);
  }

  const indexPath = path.join(folderPath, 'index.ts');
  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(indexPath, '');
    console.log('✅ Created index.ts file: ', indexPath);
  }

  return { folderPath, indexPath };
};

const createFiles = (files, filePath) => {
  try {
    files.forEach((file) => {
      const templateContent = `interface ${file}Props {}

export const ${file} = ({}: ${file}Props) => {
  return (
    <div>
      <div>${file}</div>
    </div>
  );
};
`;

      const fullPath = path.join(filePath, `${file}.tsx`);

      if (fs.existsSync(fullPath)) {
        fs.appendFileSync(fullPath, templateContent, 'utf8');
        console.log('✅ Added content to existing file: ', fullPath);
      } else {
        fs.writeFileSync(fullPath, templateContent, 'utf8');
        console.log('✅ Created new file: ', fullPath);
      }
    });
  } catch (error) {
    console.error('❌ Error: ', error);
    process.exit(1);
  }
};

const createExports = (files, indexPath) => {
  const fileExports = files.map((file) => {
    return `export { ${file} } from "./${file}";`;
  });

  try {
    fs.writeFileSync(indexPath, fileExports.join('\n'), 'utf8');
    console.log('✅ added components to index');
  } catch (error) {
    console.error('❌ Error: ', error);
    process.exit(1);
  }
};

const init = () => {
  const args = process.argv.slice(2);
  const { directory, newFolder } = getDir(args);
  const { fileNames } = getFileNames(args);

  try {
    const { folderPath, indexPath } = createFolder(newFolder, directory);
    createFiles(fileNames, folderPath);
    createExports(fileNames, indexPath);
  } catch (error) {
    console.error('❌ Error: ', error);
    process.exit(1);
  }
};

init();
