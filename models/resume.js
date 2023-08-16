import { Schema, model, models } from "mongoose";

const ResumeSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  resume_url: {
    type: String,
    required: [true, "Resume url is required."],
  },
});

const Resume = models.Resume || model("Resume", ResumeSchema);

export default Resume;
