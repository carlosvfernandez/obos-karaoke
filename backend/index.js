const fs = require('fs');
const Sequelize = require('sequelize');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const sequelize = new Sequelize('karaoke', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});




const readList = async () => {
    const file = await (readFile('./LISTA KARAOKE', 'utf-8')); // Read as UTF-8
    return file.toString();
};

//Ignore empty rows
const parseList = (list) => {
    var arraySongs = []
    list.split('\n').map(song => {
        if (song[0].match(/^[A-Z0-9]/i)) {
            arraySongs.push(song.split('.').slice(0, -1).join('').split('-').map(x => x.trim()));
        }
    });
    return arraySongs;
};

const connectBBDD = (conn) => {
    conn
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    return conn;
}
const insertSongs = (listSongs) => {

    listSongs.map(song => {
        sequelize.query("INSERT INTO artists (name) VALUES('" + song[0] + "')");
    });
}

const a = async () => {
    const list = await readList();
    const listSongs = parseList(list);
    // TODO: Connect with SQL
    connectBBDD(sequelize);
    // TODO: Insert those files into SQL
    insertSongs(listSongs);
}
a();