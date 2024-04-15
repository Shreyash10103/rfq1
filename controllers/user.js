import { User } from '../models/User.js';
import bcrypt from 'bcrypt';

const user = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({
      message: "User already exists"
    });
  }

  // Hash the password
  const hashPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    username,
    email,
    password: hashPassword
  });

  // Save the new user to the database
  await newUser.save();

  return res.json({ message: "Record registered" });
}

export default user;
