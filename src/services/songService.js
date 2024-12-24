const Song = require('../models/songModel');

// Create a new song
exports.createSong = async (data) => {
    return await Song.create(data);
};

// Get all songs
exports.getAllSongs = async () => {
    return await Song.find();
};

// Get a song by ID
exports.getSongById = async (id) => {
    return await Song.findById(id);
};

// Update a song by ID
exports.updateSong = async (id, data) => {
    return await Song.findByIdAndUpdate(id, data, { new: true });
};

// Delete a song by ID
exports.deleteSong = async (id) => {
    return await Song.findByIdAndDelete(id);
};
