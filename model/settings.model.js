import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  accept_messages: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const settingsModel =
  mongoose.models.settingsModel ||
  mongoose.model("settingsModel", settingsSchema);

export default settingsModel;
