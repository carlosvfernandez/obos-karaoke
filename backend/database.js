const Sequelize = require('sequelize');

const sequelize = new Sequelize('karaoke', 'root', '1234', {
  host: 'db',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

// connect to database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully');
  })
  .catch((err) => {
    console.error('Unable to connect to the database2:', err);
  });

module.exports = sequelize;
