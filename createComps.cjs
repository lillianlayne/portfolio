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
    let fileNames = args.slice(filesIdx, args.length);
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

  const indexPath = path.join(folderPath, 'components');
  if (!fs.exists(indexPath)) {
    fs.mkdirSync(indexPath, { recursive: true });
    console.log('✅ Created section index: ', folderPath);
  }

  return { folderPath, indexPath };
};

const init = () => {
  const args = process.argv.slice(2);
  const { directory, newFolder } = getDir(args);
  const { filenames } = getFileNames(args);

  try {
    const { folderPath, indexPath } = createFolder(newFolder, directory);
  } catch (error) {
    console.error('❌ Error: ', error);
    process.exit(1);
  }
};

init();
