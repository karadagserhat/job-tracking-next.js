import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema(
  {
    company: String,
    description: String,
    category: String,
    priority: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);

export default Topic;
