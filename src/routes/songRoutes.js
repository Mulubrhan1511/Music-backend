const express = require('express');
const {
    createSong,
    getSongs,
    getSongById,
    updateSong,
    deleteSong,
    getAllAlbums,
    getSongsByAlbum,
    getAllArtists,
    getSongsByArtist,
    getAllGenres,
    getSongsByGenre,
} = require('../controllers/songController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validate');
const songValidation = require('../validations/song.validation');

const router = express.Router();

router.post('/songs', authenticate, authorize('admin'), validate(songValidation.createSong), createSong);
router.get('/songs', authenticate, getSongs);
router.get('/songs/:id', authenticate, getSongById);
router.put('/songs/:id', authenticate, authorize('admin'), validate(songValidation.updateSong), updateSong);
router.get('/albums', authenticate, getAllAlbums);
router.get('/albums/:album', authenticate, getSongsByAlbum);
router.get('/artists', authenticate, getAllArtists);
router.get('/artists/:artist', authenticate, getSongsByArtist);
router.get('/genres', authenticate, getAllGenres);
router.get('/genres/:genre', authenticate, getSongsByGenre);
router.delete('/songs/:id', authenticate, authorize('admin'), deleteSong);

module.exports = router;
