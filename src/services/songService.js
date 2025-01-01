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

// Get All Albums
exports.getAllAlbums = async () => {
    return await Song.aggregate([
      {
        $group: {
          _id: "$album",
          artist: { $first: "$artist" }, // Assumes one artist per album; adjust if needed
        },
      },
      {
        $project: {
          _id: 0, // Exclude MongoDB's default `_id`
          album: "$_id",
          artist: 1,
        },
      },
    ]);
  };
  

// Get Songs by Album
exports.getSongsByAlbum = async (album) => {
    return await Song.find({ album });
};


exports.getAllArtists = async () => {
    return await Song.aggregate([
      {
        $group: {
          _id: "$artist",
        },
      },
      {
        $project: {
          _id: 0,
          artist: "$_id",
        },
      },
    ]);

}

// Get Songs by Artist
exports.getSongsByArtist = async (artist) => {
    return await Song.find({ artist });
};

// Get All Genres
exports.getAllGenres = async () => {
    return await Song.aggregate([
      {
        $group: {
          _id: "$genre",
        },
      },
      {
        $project: {
          _id: 0,
          genre: "$_id",
        },
      },
    ]);
};

// Get Songs by Genre
exports.getSongsByGenre = async (genre) => {
    return await Song.find({ genre });
};
