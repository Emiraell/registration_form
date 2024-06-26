import mongoose from "mongoose";

const schema = new mongoose.Schema({
  surname: { type: String, require: true },
  firstname: { type: String, require: true },
  middle: { type: String, require: false },
  email: { type: String, require: true },
  age: { type: String, require: true },
  gender: { type: String, require: true },
  relationship: { type: String, require: true },
  archdeaconry: { type: String, require: true },
  position: { type: String, require: true },
  unit: { type: String, require: true },
  competition: { type: Array, require: true },
  diocese: { type: String, require: false },
  church: { type: String, require: false },
});

export const UserModel =
  mongoose.models.users || mongoose.model("users", schema);

export default UserModel;
