import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subscriber: {
      type: mongoose.Schema.Types.ObjectId, //he one who is subscribing
      ref: "User",
    },
    channel: {
      subscriber: {
        type: mongoose.Schema.Types.ObjectId, //channel owner
        ref: "User",
      },
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("subscription", subscriptionSchema);
