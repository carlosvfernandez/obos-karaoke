const Sequelize = require('sequelize');

const sequelize = new Sequelize('karaoke', 'root', '1234', {
  ost: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

// connect to database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
