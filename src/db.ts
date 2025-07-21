import mongoose, { Schema, model } from 'mongoose';

const mongoUrl: string = 'mongodb://mongodbcontainer:27017/myDatabase'; // mongodbcontainer -> name of the mongo container and port 27017 is expose port inside of an mongodbcontainer container

// Connect to MongoDB
mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a User schema
interface IUser {
  name: string;
  age: number;
  email: string;
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

// Create a User model
export const User = model<IUser>('User', UserSchema);
