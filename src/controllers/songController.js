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
