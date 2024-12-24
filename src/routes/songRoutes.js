const express = require('express');
const {
    createSong,
    getSongs,
    getSongById,
    updateSong,
    deleteSong,
} = require('../controllers/songController');

const router = express.Router();

router.post('/songs', createSong);
router.get('/songs', getSongs);
router.get('/songs/:id', getSongById);
router.put('/songs/:id', updateSong);
router.delete('/songs/:id', deleteSong);

module.exports = router;
