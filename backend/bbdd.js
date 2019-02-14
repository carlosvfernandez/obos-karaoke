const Sequelize = require('sequelize');


const sequelize = new Sequelize('karaoke', 'root', '1234', {
  ost: 'localhost',
  dialect: 'mysql',
});

const prepareBBDD = (list) => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }).then(() => {
      sequelize.query('CREATE DATABASE IF NOT EXISTS karaoke;').then(() => {
        console.log('Database --> OK');
      });
    })
    .then(() => {
      sequelize.query('CREATE TABLE IF NOT EXISTS `karaoke`.`artists` (`id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(45) NULL,PRIMARY KEY (`id`));').then(() => {
        insertArtists(list);
      });
    })
    .then(() => {
      sequelize.query('CREATE TABLE IF NOT EXISTS `karaoke`.`songs` (`id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(45) NULL,`id_artist` VARCHAR(45) NULL, PRIMARY KEY (`id`));').then(() => {
        insertSongs(list);
      });
    });

  return sequelize;
};

const insertArtists = async (list) => {
  await Promise.all(
    list.map(async (row) => {
      try {
        const query = `INSERT INTO artists (name) 
                    SELECT * FROM (SELECT '${row[0]}') AS tmp
                    WHERE NOT EXISTS (
                    SELECT name FROM artists WHERE name = '${row[0]}'
                    ) LIMIT 1;`;
        return sequelize.query(query);
      } catch (err) {
        console.log(err);
        return err;
      }
    }),
  );
};

const insertSongs = async (list) => {
  await Promise.all(
    list.map(async (row) => {
      try {
        const query1 = `SELECT id FROM artists WHERE name='${row[0]}'`;
        const artistId = await sequelize.query(query1);


        const query2 = `INSERT INTO songs (name, id_artist) 
                                    SELECT * FROM (SELECT '${row[1]}', '${artistId[0][0].id}') AS tmp
                                    WHERE NOT EXISTS (
                                    SELECT name FROM songs WHERE name = '${row[1]}'
                                    ) LIMIT 1;`;
        return sequelize.query(query2);
      } catch (error) {
        sequelize.query(this.query2);
      }
    }),
  ).then(() => {
    sequelize.connectionManager.close().then(() => console.log('Database ready.'));
  });
};


module.exports = { prepareBBDD };
