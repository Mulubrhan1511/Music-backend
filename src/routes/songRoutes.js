const express = require('express');
const {
    createSong,
    getSongs,
    getSongById,
    updateSong,
    deleteSong,
} = require('../controllers/songController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validate');
const songValidation = require('../validations/song.validation');

const router = express.Router();

router.post('/songs', authenticate, authorize('admin'), validate(songValidation.createSong), createSong);
router.get('/songs', authenticate, getSongs);
router.get('/songs/:id', authenticate, getSongById);
router.put('/songs/:id', authenticate, authorize('admin'), validate(songValidation.updateSong), updateSong);
router.delete('/songs/:id', authenticate, authorize('admin'), deleteSong);

module.exports = router;
