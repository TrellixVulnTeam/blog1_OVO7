module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },

    mongooseToBbject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
