'use strict';

module.exports = function(Schema, Model) {
    const mongoose = require('mongoose');
    return mongoose.model(Model, Schema);    
}
