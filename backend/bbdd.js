const Sequelize = require('sequelize');

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

const connectBBDD = () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    return sequelize;
}

const closeConnectionBBDD = (conn) => {
    conn.close();
}
const insertSongs = (listSongs) => {
    listSongs.map(song => {
        sequelize.query("INSERT INTO artists (name) VALUES('" + song[0] + "')");
    });
}

module.exports = { connectBBDD, insertSongs, closeConnectionBBDD };