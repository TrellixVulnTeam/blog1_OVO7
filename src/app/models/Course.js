const mongoose = require('mongoose');

const { create } = require('express-handlebars');

const slug = require('mongoose-slug-generator');

const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        discription: { type: String },
        image: { type: String },
        videoID: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

Course.plugin(mongooseDelete, { overrideMethods: 'all' }, { deletedAt: true });

mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);
