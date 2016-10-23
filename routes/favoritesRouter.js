var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'rho'
};

var pool = new pg.Pool(config);

router.get('/', function(req, res) {
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connnecting to the DB', err);
        res.sendStatus(500);
        return;
      }

      client.query('SELECT * FROM favorite_gifs;', function(err, result) {
        if (err) {
          console.log('Error querying the DB', err);
          res.sendStatus(500);
          return;
        }
        res.send(result.rows);
      });
    } finally {
      done();
    }
  });
});

router.post('/', function(req, res) {
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connnecting to the DB', err);
        res.sendStatus(500);
        return;
      }

      var url = req.body.url;
      var comment = req.body.comment;
      var category = req.body.category;
      console.log('req.body', req.body);

      client.query('INSERT INTO favorite_gifs (url, comment, category) VALUES ($1, $2, $3) RETURNING*;',
                   [url, comment, category],
                   function(err, result) {
                    if (err) {
                      console.log('Error querying the DB', err);
                      res.sendStatus(500);
                      return;
                    }
        res.send(result.rows);
      });
    } finally {
      done();
    }
  });
});

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connnecting to the DB', err);
        res.sendStatus(500);
        return;
      }

      client.query('DELETE FROM favorite_gifs WHERE id = $1;',
                   [id],
                   function(err, result) {
                    if (err) {
                      console.log('Error querying the DB', err);
                      res.sendStatus(500);
                      return;
                    }
        res.sendStatus(200);
      });
    } finally {
      done();
    }
  });
});

module.exports = router;
