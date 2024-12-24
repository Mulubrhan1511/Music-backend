const Joi = require('joi');

const createSong = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    artist: Joi.string().required(),
    album: Joi.string().required(),
    genre: Joi.string().required(),
  }),
};

const updateSong = {
  body: Joi.object().keys({
    title: Joi.string(),
    artist: Joi.string(),
    album: Joi.string(),
    genre: Joi.string(),
  }),
  params: Joi.object().keys({
    id: Joi.string().required(), // Validate the song ID in the URL
  }),
};

module.exports = {
  createSong,
  updateSong,
};
