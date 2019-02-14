const app = require('./server');
const { mc } = require('./database');

const port = process.env.PORT || 3800;

app.listen(process.env.PORT || port, () => {
  console.log(`server on port ${port}`);
});
