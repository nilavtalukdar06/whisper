import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "message is required"],
      trim: true,
    },
    sentTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

const messageModel =
  mongoose.models.messageModel || mongoose.model("messageModel", messageSchema);

export default messageModel;
