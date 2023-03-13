const mongoose = require("mongoose");
const { SchemasTypes, CollectionEnum } = require("../enums");
const { UsersSchema } = require("../schemas");

module.exports = mongoose.model(
  SchemasTypes.User,
  UsersSchema,
  CollectionEnum.users
);
