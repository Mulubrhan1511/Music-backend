const express = require('express');
const {
  createSong,
  getSongs,
  getSongById,
  updateSong,
  deleteSong,
} = require('../controllers/songController');
const validate = require('../middlewares/validate');
const songValidation = require('../validations/song.validation');

const router = express.Router();

router.post('/songs', validate(songValidation.createSong), createSong); // Validate POST
router.get('/songs', getSongs);
router.get('/songs/:id', getSongById);
router.put('/songs/:id', validate(songValidation.updateSong), updateSong); // Validate PUT
router.delete('/songs/:id', deleteSong);

module.exports = router;
