import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 1300;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/ledgers', function(req, res) {
  // Hard coding of data for simplicity when setting up the JDE. Pretend this hits the real database.
  res.json([
    {
      "id": 1,
      "name": "Reckon Company Limited",
      "type": "Company",
      "balancedate": "31/03/2017"
    },
    {
      "id": 2,
      "name": "Reckon Trust",
      "type": "Trust",
      "balancedate": "31/03/2017"
    },
    {
      "id": 3,
      "name": "Reckon Partnership",
      "type": "Partnership",
      "balancedate": "31/03/2017"
    },
    {
      "id": 4,
      "name": "Reckon Sole Trader",
      "type": "Sole Trader",
      "balancedate": "30/06/2017"
    }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
