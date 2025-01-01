const songService = require('../services/songService');

// Create a new song
exports.createSong = async (req, res) => {
    try {
        const song = await songService.createSong(req.body);
        res.status(201).json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all songs
exports.getSongs = async (req, res) => {
    try {
        const songs = await songService.getAllSongs();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single song by ID
exports.getSongById = async (req, res) => {
    try {
        const song = await songService.getSongById(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a song
exports.updateSong = async (req, res) => {
    try {
        const song = await songService.updateSong(req.params.id, req.body);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a song
exports.deleteSong = async (req, res) => {
    try {
        const song = await songService.deleteSong(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.status(200).json({ message: 'Song deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all albums
exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await songService.getAllAlbums();
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get songs by album
exports.getSongsByAlbum = async (req, res) => {
    try {
        const songs = await songService.getSongsByAlbum(req.params.album);
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all artists
exports.getAllArtists = async (req, res) => {
    try {
        const artists = await songService.getAllArtists();
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get songs by artist
exports.getSongsByArtist = async (req, res) => {
    try {
        const songs = await songService.getSongsByArtist(req.params.artist);
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all genres
exports.getAllGenres = async (req, res) => {
    try {
        const genres = await songService.getAllGenres();
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get songs by genre
exports.getSongsByGenre = async (req, res) => {
    try {
        const songs = await songService.getSongsByGenre(req.params.genre);
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


