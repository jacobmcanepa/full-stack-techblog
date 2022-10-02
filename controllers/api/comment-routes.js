const router = require('express').Router();
const { Comment } = require('../../models');

// GET /api/comments
router.get('/', (req, res) => {
  Comment.findAll()
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/comments
router.post('/', (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.body.user_id,
    post_id: req.body.post_id
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }); 
});

// DELETE /api/comments/:id
router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }

      res.json({
        status: 'success',
        message: 'Comment successfully deleted from database'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;