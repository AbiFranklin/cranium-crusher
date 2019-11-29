const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  gk_right: {
    type: Number,
    default: 0
  },
  gk_total: {
    type: Number,
    default: 0
  },
  ent_right: {
    type: Number,
    default: 0
  },
  ent_total: {
    type: Number,
    default: 0
  },
  sci_right: {
    type: Number,
    default: 0
  },
  sci_total: {
    type: Number,
    default: 0
  },
  myth_right: {
    type: Number,
    default: 0
  },
  myth_total: {
    type: Number,
    default: 0
  },
  sport_right: {
    type: Number,
    default: 0
  },
  sport_total: {
    type: Number,
    default: 0
  },
  geo_right: {
    type: Number,
    default: 0
  },
  geo_total: {
    type: Number,
    default: 0
  },
  hist_right: {
    type: Number,
    default: 0
  },
  hist_total: {
    type: Number,
    default: 0
  },
  pol_right: {
    type: Number,
    default: 0
  },
  pol_total: {
    type: Number,
    default: 0
  },
  art_right: {
    type: Number,
    default: 0
  },
  art_total: {
    type: Number,
    default: 0
  },
  ani_right: {
    type: Number,
    default: 0
  },
  ani_total: {
    type: Number,
    default: 0
  },
  veh_right: {
    type: Number,
    default: 0
  },
  veh_total: {
    type: Number,
    default: 0
  },
  ALL_right: {
    type: Number,
    default: 0
  },
  ALL_total: {
    type: Number,
    default: 0
  },
  isDeleted: {
      type: Boolean,
      default: false
  }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', UserSchema);
