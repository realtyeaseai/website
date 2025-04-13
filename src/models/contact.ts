import mongoose from 'mongoose';

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
  createdAt?: Date; // Optional since it has a default value
}

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  reason: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
