const router = require('express').Router();
let Journal = require('../schemas/journal.schema');

router.route('/').get((req, res) => {
  Journal.find()
    .then(journal => res.json(journal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const technique = req.body.technique;
  const rolling = req.body.rolling;
  const date = Date.parse(req.body.date);

  const newJournal = new Journal({
    username,
    technique,
    rolling,
    date,
  });

  newJournal.save()
  .then(() => res.json('Journal added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Journal.findById(req.params.id)
      .then(journal => res.json(journal))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Journal.findByIdAndDelete(req.params.id)
      .then(() => res.json('Journal deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    Journal.findById(req.params.id)
      .then(journal => {
        journal.username = req.body.username;
        journal.technique = req.body.technique;
        journal.rolling = req.body.rolling;
        journal.date = Date.parse(req.body.date);
  
        journal.save()
          .then(() => res.json('Journal updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;