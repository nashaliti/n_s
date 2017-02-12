var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypy = require('bcrypt-nodejs');

var userSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true}
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypy.hashSync(password, bcrypy.genSaltSync(5),null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypy.compareSync(password, this.password);
};



module.exports = mongoose.model('User',userSchema);
