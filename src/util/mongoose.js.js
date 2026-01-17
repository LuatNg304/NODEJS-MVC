module.exports = {
    multipleMongooseToObject: function (monooseArray) {
        return monooseArray.map((monooseArray) => monooseArray.toObject());
    },
    mongooseToOBject(mongooes) {
        return mongooes ? mongooes.toObject() : mongooes;
    },
};
