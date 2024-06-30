import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
  },
  name: String,
});

const User = mongoose.model('User', userSchema);
export default User;
