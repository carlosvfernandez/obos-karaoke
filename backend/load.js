const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const bbdd = require('./bbdd');

const readList = async () => {
  const file = await (readFile('./LISTA KARAOKE', 'utf-8')); // Read as UTF-8
  return file.toString();
};

const parseList = (list) => {
  const arraySongs = [];
  list.split('\n').map((song) => {
    if (song[0].match(/^[A-Z0-9]/i)) {
      arraySongs.push(song.split('.').slice(0, -1).join('').split('-')
        .map(x => x.trim()));
    }
  });
  return arraySongs;
};

const mainProcess = async () => {
  //handleSQLRootPassword();
  //createDB();
  const list = await readList();
  const parsedList = parseList(list);
  bbdd.prepareBBDD(parsedList);
};

module.exports = { mainProcess };
